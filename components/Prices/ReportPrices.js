import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const ReportPrices = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <Row>
        <img
          src={data?.image?.data?.attributes?.url}
          alt="CDR Report Sevices Prices "
        />
      </Row>
      <TextParagraph
        content={data?.paragraph && parse(data.paragraph)}
        family="Arial"
      />
      {/* <TextParagraph
        content="Let’s Take a look at the various price ranges of CDR For Engineer CDR Services for Engineers Australia (EA) Skill Assessments:"
        family="Arial"
      /> */}
    </Container>
  );
};

export default ReportPrices;
