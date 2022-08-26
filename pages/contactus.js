import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Card, Container, Row, Button } from "react-bootstrap";
import PurpleHeading from "../components/PurpleHeading";
import TextParagraph from "../components/TextParagraph";
import ContactUsForm from "../components/Contactus/ContactUsForm";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Seo from "../components/Seo";
import parse from "html-react-parser";
const ContactUs = ({ contactRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, seo, shared } = contactRes;

  return (
    <Container>
      {/* <Head>
      <title>Contact Us | CDR For Engineer</title>
      <meta name='description' content='We are available 24 hours 7 days and you can reach to us through different medium like phone email  | CDR For Engineer'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head> */}
      <Seo seo={seo} />
      <PurpleHeading title={hero?.title} />
      <TextParagraph
        content={hero?.paragraph && parse(hero.paragraph)}
        family="Arial"
        centerAlign
      />
      <div>
        <div
          className="position-relative"
          style={{
            background: "#FFFFFF",
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.25)",
            borderRadius: "18px",
          }}
        >
          <div className="d-flex contactUsFull">
            <div style={{ flex: "0.4" }} className="p-1 contactUsHalf">
              <Card
                className="p-md-5 p-2"
                style={{ background: "#3D1F91", borderRadius: "12px" }}
              >
                <div
                  className="position-absolute contactUsDesignBubble"
                  style={{
                    height: "0px",
                    width: "0px",
                    // background: "#F8929D",
                    borderLeft: "200px solid transparent",
                    borderRight: "200px solid transparent",
                    borderRadius: "50%",
                    borderTop: "200px solid #F8929D",
                    bottom: "-30px",
                    right: "-130px",
                    transform: "rotate(-45deg)",
                  }}
                ></div>
                <h1
                  className="my-4 "
                  style={{
                    fontSize: "25px",
                    color: "white",

                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  Contact Us
                </h1>
                <p
                  className="mb-md-5 mb-2"
                  style={{
                    color: "white",

                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>

                <p
                  className="mt-2 mb-md-5 mb-2 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <WhatsAppIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  +61 482 072 510
                </p>

                <p
                  className="mt-2 mb-md-5 mb-2 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <EmailOutlinedIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  info@cdrforengineer.com
                </p>

                <p
                  className="mt-2 mb-5 ms-4"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Arial",
                  }}
                >
                  <FmdGoodRoundedIcon
                    className="me-3"
                    style={{ color: "#F8929D", fontSize: "22px" }}
                  />
                  102 Street 2714 Don
                </p>

                <h1
                  className="mt-md-5 mt-0 mb-2"
                  style={{
                    fontSize: "22px",
                    color: "white",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  Social Links
                </h1>
                <Row>
                  <div className="d-flex flex-row my-2">
                    <FacebookOutlinedIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="me-3"
                    />
                    <TwitterIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="mx-3"
                    />
                    <InstagramIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="mx-3"
                    />
                    <LinkedInIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="mx-3"
                    />
                  </div>
                </Row>
              </Card>
            </div>
            <div style={{ flex: "0.6" }} className="px-4 contactUsHalf">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <Row className="mb-5">
        <PurpleHeading title={shared?.data?.attributes?.title} />
        <Row className="mt-3 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Button
              className="mx-3"
              style={{
                fontSize: "20px",
                background: "#FA2545",
                border: "none",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              {" "}
              <WhatsAppIcon className="me-2" />
              Whatsapp
            </Button>
            <Button
              className="mx-3"
              style={{
                fontSize: "20px",
                background: "#FA2545",
                border: "none",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <a
                href="https://www.facebook.com/cdrforengineer001"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookOutlinedIcon className="m-1" />
                Facebook
              </a>
            </Button>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;
  const contact = await fetch(NEXT_STRAPI_API_URL + "contact?populate=deep");

  const contactRes = await contact.json();

  return {
    props: {
      contactRes: contactRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default ContactUs;
