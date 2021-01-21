import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ResumeItem = ({ id, title, descrip }) => {
  return (
    <Card className="mb-4">
      <Card.Header>{title}</Card.Header>
      <Card.Body>{descrip}</Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-between">
        <Link
          className="small text-white stretched-link text-dark"
          to={"/dashboard/show/" + id}
        >
          show
        </Link>
        <div className="small text-dark">
          <i className="fas fa-angle-right text-danger"></i>
        </div>
      </Card.Footer>
    </Card>
  );
};
