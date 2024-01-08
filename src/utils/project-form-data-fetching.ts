import {ADDRESS_FORM_API_BASE_URL, fetchFieldByString} from "./talent-form-data-fetching";

export const PROJECT_FORM_ID = "79faa887-ea39-4054-8fc7-7590c4ff5728";

export const NEW_ADDRESS_FORM_API_KEY = "6413f5db-06ad-41fc-8d0c-480c9074de97"

export const fetchProjectDataFromAPI = async () => {
    const apiResponse = await fetch(
        `${ADDRESS_FORM_API_BASE_URL}api_key=${NEW_ADDRESS_FORM_API_KEY}&form_id=${PROJECT_FORM_ID}`
    );

    const rawProjectData = await apiResponse.json();

    console.log(rawProjectData);

    return postProcessAPIResponse(rawProjectData) as Array<any>;
};

const postProcessAPIResponse = (data) => {
    return data.responses.map((r) => {
        const responseData = r.response_data;
        return {
            title: fetchFieldByString(responseData, "title"),
            url: "https://" + fetchFieldByString(responseData, "link")
            .replace("http://","")
            .replace("https://", ""),
            image: fetchFieldByString(responseData, "thumbnail") || null,
            categories: fetchFieldByString(responseData, "categories")
        }
    });
};
