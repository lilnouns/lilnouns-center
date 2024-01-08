import React from "react";
import Grid from "../components/Dev/Grid";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Link from "../components/Link";
import Subheader from "../components/Subheader";
import Title from "../components/Title";

const nounsCenterDevLink = (
  <Link
    leavesPage={true}
    text="nouns.center/dev"
    url="https://nouns.center/dev"
  />
);

const Dev = () => {
  return (
    <>
      <PageHeader>
        <Header title="Dev | Lil Nouns Center" />
        <Title title="Dev Reources" />

        <Subheader
          body={
            <>
              Here you will find a list of technical resources & docs about
              working with Lil Nouns as well as a link to our Github repos. As
              Lil Nouns is fork of the original Nouns protocol and thus shares
              much of its code / structures reviewing {nounsCenterDevLink} may
              also be useful.
            </>
          }
        />
      </PageHeader>

      <PageContent>
        <Grid />
      </PageContent>
    </>
  );
};

export default Dev;
