import React from "react";
import Header from "../../components/Header";
import PageContent from "../../components/Layout/PageContent";
import PageHeader from "../../components/Layout/PageHeader";
import TextContent from "../../components/Layout/TextContent";
import Link from "../../components/Link";
import Subheader from "../../components/Subheader";
import Title from "../../components/Title";

// const lilGrantsNotionPage = "Lil-Grants-b6d31f3454e446bb96f79c781ab1896a";

// export async function getStaticProps() {
//   let data = [];

//   let error = "";

//   try {
//     const res = await fetch(
//       `https://notion-api.splitbee.io/v1/table/${lilGrantsNotionPage}`
//     );
//     if (res.status !== 200)
//       throw String(`Invalid server response: ${res.status} ${res.statusText}`);
//     data = await res.json();

//     if (!data) throw String("No data was found!");
//     data = JSON.parse(JSON.stringify(data));
//     console.log(data);
//   } catch (e) {
//     error = e.toString();
//   }

//   return {
//     props: {
//       grantsData: data,
//     },
//   };
// }

const lilgrants = () => {
  return (
    <>
      <PageHeader>
        <Header title="Lil Grants | Lil Nouns Center" />
        <Title title="Funding: Lil Grants" />

        <Subheader
          title="For projects needing 0.1-5Ξ
"
          body="The Lil Grants Retro Fund is a pool of ETH reserved to provide builders with retro/ad-hoc funding. Small amounts of capital are handed out on the spot, for a trial, to get something started or to recognize efforts for making something. The fund is in a safe, managed by a small group of Lil Nouners.
          "
        />
      </PageHeader>

      <PageContent>
        <TextContent title="Overview">
          <p>
            The Lil Grants Committee is a pool of capital funded by{" "}
            <Link
              text="Proposal 13"
              url="https://lilnouns.wtf/vote/13"
              leavesPage={true}
              brandText={false}
            />{" "}
            to provide builders in the Lil Nouns ecosystem with retro/ ad-hoc
            funding. It is currently administerd via a multi-sig signed by lil
            word, lil dot, bflynn, lil john, lil al409, and vsvsvs. Any
            questions about the Lil Grants program not answered here can be
            surfaced in n{" "}
            <Link
              text="#lil-grants"
              url="https://discord.com/channels/954142017556979752/985238966141870090"
              leavesPage={true}
            />{" "}
            channel in the{" "}
            <Link
              text="Lil Nouns Discord"
              url="https://discord.com/invite/xjARUcB3tJ"
              leavesPage={true}
            />
            .
          </p>
        </TextContent>

        <TextContent title="Requesting a Lil Grant">
          <p>
            Open a post on{" "}
            <Link
              text="Discourse"
              url="https://discourse.lilnouns.wtf/"
              leavesPage={true}
            />{" "}
            using this{" "}
            <Link
              text="template"
              url="https://discourse.lilnouns.wtf/t/example-lil-grants-request/137"
              leavesPage={true}
            />
            . From there, post your discousre link in
            <Link
              text="#lil-grants"
              url="https://discord.com/channels/954142017556979752/985238966141870090"
              leavesPage={true}
            />{" "}
            channel in the{" "}
            <Link
              text="Lil Nouns Discord"
              url="https://discord.com/invite/xjARUcB3tJ"
              leavesPage={true}
            />
            and a member of the Lil Grants committee will reach out to you to
            discuss your project.
          </p>
        </TextContent>

        <TextContent title="What's been funded?">
          <ul className="lisc-desc">
            <li>
              <Link
                text="Lil Grants Season 1 Funding Tracker"
                url="https://lil-world.notion.site/lil-world/Lil-Grants-b6d31f3454e446bb96f79c781ab1896a"
                leavesPage={true}
              />
            </li>
            <li>
              <Link
                text="Lil Grants Season 2 Funding Tracker"
                url="https://www.notion.so/al409/Lil-Grants-Season-2-fdbb431147b9406fae1896f6bcc4d0d7"
                leavesPage={true}
              />
            </li>
          </ul>
        </TextContent>
      </PageContent>
    </>
  );
};

export default lilgrants;
