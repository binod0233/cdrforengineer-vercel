import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";
const FreeDownload = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <Row>
        <Col md={8} className="pt-5">
          <TextParagraph
            content={data?.paragraph && parse(data.paragraph)}
            family="Arial"
          />
        </Col>
        <Col md={4} style={{ zIndex: "-1" }}>
          <img
            src={data?.image?.data?.attributes?.url}
            alt=" free sample"
            className="img-fluid"
            style={{ marginTop: "-70px", zIndex: "-1" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FreeDownload;
