import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { resumesList } from "../../helpers/resumes";
import { BtnOptions } from "./BtnOptions";

export const ResumeContent = () => {
  return (
    <div id="layoutSidenav_content">
      <main>
        <Container fluid>
          <BtnOptions />
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <Row>
            {resumesList.map( item => (
              <Col key={ item.id } xl={ 3 } md={ 6 }>
                <Card className="mb-4">
                  <Card.Body>
                    { item.title }
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link text-dark" to={ "/dashboard/show/"+item.id } >
                      Show resume
                    </Link>
                    <div className="small text-dark">
                      <i className="fas fa-angle-right text-danger"></i>
                    </div>
                  </Card.Footer>
                </Card>
              </Col> 
              ))}
          </Row>
        </Container>
      </main>
    </div>
  );
};
