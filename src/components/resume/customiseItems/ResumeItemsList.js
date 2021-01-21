import React from "react";
import { Row, Col } from "react-bootstrap";
import { ResumeItem } from "./ResumeItem";

export const ResumeItemsList = ({ resumeItemList }) => {
  return (
    <Row className="m-3">
      {resumeItemList.map((item) => (
        <Col key={item.id} xl={3} md={6}>
          <ResumeItem id={item.id} title={item.title} descrip={item.descrip} />
        </Col>
      ))}
    </Row>
  );
};
