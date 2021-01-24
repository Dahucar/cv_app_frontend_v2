import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SkillItems = ({ id, name, exp, createAd }) => {
  return (
    <Col xl={3} md={6}>
      <Card className="mb-4">
        <Card.Header>
          {name} | {createAd}
        </Card.Header>
        <Card.Body>{exp}</Card.Body>
        <Card.Footer className="d-flex align-items-center justify-content-between">
          <Link
            className="small text-white stretched-link text-dark"
            to={"/dashboard/show/" + id}
          >
            show
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};
