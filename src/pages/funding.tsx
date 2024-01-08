import React from "react";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Link from "../components/Link";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const funding = [
  {
    source: "Lil Grants",
    range: "0.1 - 5",
    link: "/funding/lilgrants",
    linkText: "Request a grant",
    lilNounsRequiredText: "NO LIL NOUN NEEDED TO APPLY",
    tagline: (
      <>
        <ul className="list-decimal px-4">
          <li>To pilot a project that has a larger goal</li>
          <li>Bolt on already finished project</li>
          <li>Retroactive funding for services</li>
        </ul>
      </>
    ),
    textColor: "text-[#028940]",
    bgColor: "bg-[#028940]",
    img: "sml.png",
    marginBottom: "",
    marginTop: "",
  },
  {
    source: "Prop House",
    range: "2 - 10",
    distributed: "awarded to ",
    link: "/funding/prophouse",
    linkText: "Submit prop",
    lilNounsRequiredText: "NO LIL NOUN NEEDED TO APPLY",
    tagline: (
      <>
        Run by Prop House. Submit proposals to{" "}
        <Link
          brandText={false}
          leavesPage={true}
          text="prop.house/lil-nouns"
          url="https://prop.house/lil-nouns"
        />
        . Each round has a specified ETH amount, and the community votes on who
        wins.
      </>
    ),
    textColor: "text-blue-base",
    bgColor: "bg-blue-base",
    img: "med.png",
    marginBottom: "mb-5",
    marginTop: "",
  },
  {
    source: "Proposals",
    range: "10 - 100",
    recipientType: "props",
    distributed: "across",
    link: "/funding/proposals",
    linkText: "Learn more",
    // LiL Nouns required text set dynamically via graph call
    tagline:
      "Resources allocated for the long-term growth of the Lil Nouns project. Larger in scope and undergo more scruntiny.",
    textColor: "text-[#E5284A]",
    bgColor: "bg-[#E5284A]",
    img: "lg.png",
    marginBottom: "mb-10",
    marginTop: "mt-5",
  },
];

export const getStaticProps = async (context) => {

  const graphResponse = await fetch('https://api.thegraph.com/subgraphs/name/lilnounsdao/lil-nouns-subgraph', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    {
      proposals(orderBy: startBlock orderDirection: desc first: 1) {
        id 
        proposalThreshold
      }
    }
      `,
  }),
});

const graphAPIResult = await graphResponse.json();

// console.log(graphAPIResult.data.proposals[0]);
return {
  props: {
    proposalThreshold: graphAPIResult.data.proposals[0].proposalThreshold
  },
  revalidate: 60
}
};

const Funding = ({proposalThreshold}) => {
  return (
    <>
      <PageHeader>
        <Header title="Funding | Lil Nouns Center" />
        <Title title="Funding" />
        <Subheader body="Looking to get funding for a Lil Nounish project? There are many ways to go about doing so! Below you can compare the different avenues. It's important to take in to consideration project scope and timeline." />
      </PageHeader>

      <PageContent>
        <dl className="mt-5 grid grid-cols-1 flex-col rounded-xl overflow-hidden sm:shadow-none md:grid-cols-3 xs:gap-8 sm:gap-4">
          {funding.map((item) => (
            <div key={item.source}>
              <a href={item.link} className="cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/funding/${item.img}`} alt={item.img} />
              </a>

              <div className="relative bg-white py-5 px-4 pb-16 sm:pt-6 sm:px-5 xs:shadow-sm sm:shadow-none xs:rounded-lg  overflow-hidden sm:divide-x divide-white ">
                <dt
                  className={`text-nouns text-2xl tracking-wide pb-4 ${item.textColor}`}
                >
                  {item.source}
                </dt>

                <dd className="mt-1 flex flex-col justify-between items-baseline md:block lg:flex font-extrabold">
                  <div className="items-baseline text-4xl">{item.range}Ξ </div>

                  <div className="text-sm mt-2">
                    {
                      item.source === "Proposals" ? `${proposalThreshold} Lil Nouns Needed to Propose` :
                      item.lilNounsRequiredText
                    }
                  </div>

                  <div
                    className={`pt-3 text-sm flex flex-col gap-1 ${item.marginBottom} ${item.marginTop}`}
                  >
                    <span className="font-normal text-black pt-4">
                      {item.tagline}
                    </span>{" "}
                  </div>
                </dd>

                <a href={item.link} className="font-medium text-white">
                  <div
                    className={`absolute hover:bg-opacity-80 transition cursor-pointer bottom-0 inset-x-0
                     rounded-b-xl ${item.bgColor} px-4 py-3 sm:px-5 `}
                  >
                    <div className="text-sm lg:${it} font-medium text-white">
                      {" "}
                      {item.linkText} →
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </dl>
      </PageContent>
    </>
  );
};

export default Funding;
