import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../../components/Hero";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import FreeDownload from "../../components/Samples/FreeDownload";
import HighQualityCDRSamples from "../../components/Samples/HighQualityCDRSamples";
import HowHelps from "../../components/Samples/HowHelps";
import SamplesForEngineers from "../../components/Samples/SamplesForEngineers";
import WhyRely from "../../components/Samples/WhyRely";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const Samples = ({ sampleRes }) => {
  const router = useRouter();
  console.log("sampleRes", sampleRes);
  const { hero, sample, seo, shared, title, free } = sampleRes;

  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div>
      {/* <Head>
        <title>CDR Samples</title>
        <meta name="description" content="Download cdr report samples" />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero?.paragraph && parse(hero.paragraph)}
      />
      <SamplesForEngineers data={sample} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={
          shared?.data?.attributes?.paragraph &&
          parse(shared.data.attributes.paragraph)
        }
        buttonName="Contact Us"
      />
      <HighQualityCDRSamples />
      <CDRReportAccepted
        title="CDR For Engineer is always Near to you for all Your CDR Report Queries."
        buttonName="Chat With Us"
        data="CDR For Engineer is known as one of the Top and best CDR writing service provider in Australia. To get help, connect 
        with us and we with our Expert Experienced CDR writers are always there to help you at any time."
      />
      <HowHelps data={sampleRes} />
      <WhyRely />
      <FreeDownload data={free} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { NEXT_STRAPI_API_URL } = process.env;

  const samples = await fetch(NEXT_STRAPI_API_URL + `cdr-sample?populate=deep`);
  const sampleRes = await samples.json();

  return {
    props: {
      sampleRes: sampleRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
}

export default Samples;
