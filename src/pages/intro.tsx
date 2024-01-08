import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import {NotionRenderer} from "react-notion";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";

const introToLilNounsNotionPage = "54ea31f688734819954bfa13b88f7f7f";

export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/page/${introToLilNounsNotionPage}`
    );
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String("No data was found!");
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      docsData: data,
    },
  };
}

const Intro = ({ docsData }) => {
  return docsData ? (
    <>
      <PageHeader>
        <Header title="Intro | Lil Nouns Center" />
        <Title title="Intro" />

        <Subheader
          title="A Brief Introduction to Lil Nouns"
          body="If you ever wanted to know what Lil Nouns is all about, this is a great place to start."
        />
      </PageHeader>

      <PageContent>
        <div className="introNouns break-words">
          <NotionRenderer blockMap={docsData} />
        </div>
      </PageContent>
    </>
  ) : (
    <></>
  );
};
export default Intro;
