import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import parse from "html-react-parser";

const FeelingCurious = ({ data }) => {
  return (
    <div style={{ background: "#F8F8F8", marginTop: "70px" }}>
      <Container className="pt-5 pb-5">
        <h1 className="CDRReportAcceptedHeading" style={{ color: "#370C64" }}>
          {data?.title}
        </h1>
        <p className="CDRReportAcceptParagraph" style={{ color: "#666666" }}>
          {data?.paragraph && parse(data.paragraph)}
        </p>
        <Row className="d-flex justify-content-center">
          <Button
            className="CDRReportAcceptButton"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: "#FA2545",
              border: "none",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://api.whatsapp.com/send?phone=61482072510"
            >
              Make a Call
            </a>
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default FeelingCurious;
