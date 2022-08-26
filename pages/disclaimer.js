import React from "react";
import Head from "next/head";
import { Col, NavItem, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import parse from "html-react-parser";

const Disclaimer = ({ disclaimerRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { content, seo, shared } = disclaimerRes;
  return (
    <div>
      {/* <Head>
      <title>Disclaimer | CDR For Engineer</title>
      <meta name='description' content='Disclaimer | CDR For Engineer'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head> */}
      <div
        style={{
          background: `linear-gradient(
  90deg,
  #60269e 0%,
  #4c1980 35.73%,
  #360b62 100%
)`,
          minHeight: "6rem",
        }}
      >
        <div className="container px-3 px-md-5">
          <Row>
            <Col md={6} xs={12} className="text-white mt-md-5 pt-md-5 mb-5">
              <p className="text-center text-md-start my-4">
                Home &gt; <strong>Disclaimer</strong>
              </p>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Row className="px-md-5 py-md-3">
        {/* <h1
          className="ms-md-5 my-3"
          style={{
            fontFamily: "Cambria",
            fontWeight: "700",
            fontSize: "30px",
            color: "#561F8E",
          }}
        >
          Disclaimer
        </h1> */}
        <Row>
          {content &&
            content.map((item, index) => (
              <>
                {" "}
                <h2
                  className="md-5 my-3"
                  style={{
                    fontFamily: "Cambria",
                    fontWeight: "700",
                    fontSize: "30px",
                    color: "#561F8E",
                  }}
                >
                  {item?.title}
                </h2>
                <Col>
                  <p
                    style={{
                      fontFamily: "Cambria",
                      fontWeight: "400",
                      fontSize: "25px",
                      color: "#000000",
                    }}
                  >
                    {item?.paragraph && parse(item.paragraph)}{" "}
                  </p>
                </Col>
              </>
            ))}
        </Row>
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;
  const disclaimer = await fetch(
    NEXT_STRAPI_API_URL + "disclaimer?populate=deep"
  );

  const disclaimerRes = await disclaimer.json();

  return {
    props: {
      disclaimerRes: disclaimerRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Disclaimer;
