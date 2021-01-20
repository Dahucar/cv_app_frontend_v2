import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PasswordScreen = () => {
  const handlerReset = e => {
    e.preventDefault();
    console.log('Reset ->');
  }
  return (
    <div id="layoutSidenav_content">
      <main className="main">
        <Container>
          <Row className="justify-content-center"> 
            <Col xs lg="5">
              <Card className="shadow-lg border-0 rounded-lg mt-5">
                <Card.Header>
                  <h3 className="text-center font-weight-light my-4">
                    Password Recovery
                  </h3>
                </Card.Header>
                <Card.Body>
                  <div className="small mb-3 text-muted">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </div>
                  <Form onSubmit={ handlerReset }> 
                    <Form.Group controlId="formReset.emailControl">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0"> 
                      <Link className="small" to="/login">Return to login</Link>
                      <button type="submit" className="btn btn-primary">
                        Forgot passowrd
                      </button> 
                    </div>
                  </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                  <div className="small">
                    <Link to="/register">Need an account? Sign up!</Link>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
