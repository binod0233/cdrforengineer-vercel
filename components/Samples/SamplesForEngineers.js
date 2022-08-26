import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const SamplesForEngineers = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <TextParagraph
        content={data?.paragraph && parse(data.paragraph)}
        family="Arial"
      />
      <Row className="pb-4">
        <img
          src={data?.image?.data?.attributes?.url}
          alt="A flawless CDR report without plagarism"
        />
      </Row>
      {/* <TextParagraph
        content="CDR For Engineer is renowned in Australia as one of the top CDR writing service providers. We are goal-oriented, and we have competent, experienced 
        writers that can prepare a high-quality CDR report for you at a reasonable price. Our professional writers have engineering experience and are 
        familiar with the requirements and structure outlined in the Engineers Australia's Migration Skill Assessment (MSA) booklet. We don't just proclaim 
        to be the best we have a high client success record also Engineering Applicants will get a CDR Report Samples of all Engineering Domains such as 
        Engineering Manager, Civil Engineer, Chemical Engineer, Materials Engineer, Transport Engineer, Geotechnical Engineer, Structural Engineer, 
        Electrical Engineer, Industrial Engineer, Electronics Engineer, Mechanical Engineer, Mining Engineer, Petroleum Engineer, Production or Plant 
        Engineer, Mining Engineer, Petroleum Engineer, Agricultural Engineer, Biomedical Engineer, Aeronautical Engineer, Environmental Engineer, 
        Engineering Technologist, Engineer Professionals(NEC) Computer Network and Systems Engineer, Telecommunications Engineer, Civil Engineering 
        Draftsperson, Telecommunications Network Engineer,  Civil Engineering Technician, Electrical Engineering Draftsperson, Electrical Engineering 
        Technician, and Telecommunications Fields. Many students throughout the globe aspire of pursuing a profession as an engineer in Australia so they 
        must first prepare and submit their CDR Report to Engineers Australia (EA). However, because of a poor understanding of the standards for CDR 
        writing, many engineers fail to provide a quality CDR Report to Engineers Australia. 
        "
        family="Arial"
      />
      <TextParagraph
        content="        
        That's why we're here to offer you a high-quality CDR Sample which you can use to prepare your own CDR Report thus that you may work as an 
        engineer in Australia. Our Professional Writers consider CDR Report writing Procedures very seriously so they offer high-quality CDR Report Samples 
        to get 100 % Approval from Engineers Australia.
"
        family="Arial"
      /> */}
    </Container>
  );
};

export default SamplesForEngineers;
