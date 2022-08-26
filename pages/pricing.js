import React from "react";
import Head from "next/head";
import FrequentlyAsked from "../components/Prices/FrequentlyAsked";
import FeaturesPricing from "../components/Prices/FeaturesPricing";
import ReportPrices from "../components/Prices/ReportPrices";
import CDRReportAccepted from "../components/Home/CDRReportAccepted";
import FeelingCurious from "../components/Prices/FeelingCurious";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import parse from "html-react-parser";
import Seo from "../components/Seo";

const Pricing = ({ pricingRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, plan, seo, shared } = pricingRes;
  console.log(pricingRes);
  return (
    <div>
      {/* <Head>
        <title>Pricing | CDR For Engineer</title>
        <meta name="description" content="Pricing | CDR For Engineer" />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      {/* <Hero
        title="Check our Excellent Pricing 
on Various Services
"
        details="We provide CDR Writing Service at a very convenient and 
valued price."
      /> */}
      <Seo seo={seo} />
      <ReportPrices data={hero} />
      <FeaturesPricing data={pricingRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={
          shared?.data?.attributes?.paragraph &&
          parse(shared.data.attributes.paragraph)
        }
        buttonName="Get Pricing Details Here"
        link="/pricing"
      />
      <FrequentlyAsked />
      <FeelingCurious data={plan} />
    </div>
  );
};
export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;
  const pricing = await fetch(NEXT_STRAPI_API_URL + "pricing?populate=deep");

  const pricingRes = await pricing.json();

  return {
    props: {
      pricingRes: pricingRes?.data?.attributes,
    },
    revalidate: 1,
  };
};

export default Pricing;
