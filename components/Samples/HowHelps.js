import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";
const HowHelps = ({ data }) => {
  const { how, how_data } = data;
  // const how = [
  //   {
  //     title: "01",
  //     details: `You will make several mistakes. Your CDR is likely to be rejected if
  //   you dont follow the CDR Report Sample as a guide.`,
  //   },
  //   {
  //     title: "02",
  //     details: `You can learn about the structure of the complete CDR Report by
  //     referencing the CDR samples.`,
  //   },
  //   {
  //     title: "03",
  //     details: `The CDR Samples for Engineers Australia will assist you in writing
  //     the Summary Statement Report and connecting the indications and
  //     elements to the appropriate Career Episode paragraphs.`,
  //   },
  //   {
  //     title: "04",
  //     details: `The CDR Sample will be highly useful in assisting you in preparing
  //     an error-free CDR Report.`,
  //   },
  // ];
  return (
    <Container>
      <PurpleHeading title={how?.title} />
      <TextParagraph
        content={how?.paragraph && parse(how.paragraph)}
        family="Arial"
      />
      <Row>
        {/* {how.map((m, index) => (
          <Col md={6} key={index} className="px-4 py-3">
            <Row style={{ height: "100px" }}>
              <Col
                xs={1}
                md={1}
                className="d-flex justify-content-center align-items-center "
                style={{
                  background: "#FA2545",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                {m.title}
              </Col>
              <Col
                xs={11}
                md={11}
                className="d-flex justify-content-center align-items-center"
                style={{ background: "#F4F4F4" }}
              >
                {m.details}
              </Col>
            </Row>
          </Col>
        ))} */}
      </Row>
    </Container>
  );
};

export default HowHelps;
