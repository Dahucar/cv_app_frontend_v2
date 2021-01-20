import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  const handlerRegister = e => {
    e.preventDefault();
    console.log('register ->');
  }
  return (
    <div id="layoutSidenav_content">
      <main className="main">
        <Container>
          <Row className="justify-content-center"> 
            <Col xs lg="7">
              <Card className="shadow-lg border-0 rounded-lg mt-5">
                <Card.Header>
                  <h3 className="text-center font-weight-light my-4">
                    Create Account
                  </h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={ handlerRegister }> 
                    <Form.Group controlId="formRegister.nickControl">
                      <Form.Label>Nick</Form.Label>
                      <Form.Control type="text" placeholder="Enter your nicl" />
                    </Form.Group>
                    <Form.Group controlId="formRegister.nameControl">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formRegister.surnameControl">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control type="text" placeholder="Enter your surname" />
                    </Form.Group>
                    <Form.Group controlId="formRegister.emailControl">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="formRegister.passwordControl">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="*****" />
                    </Form.Group>
                    <Form.Group controlId="formRegister.submitControl">
                      <button type="submit" className="btn btn-primary btn-block">
                        Create account
                      </button> 
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Footer className="text-center">
                  <div className="small">
                    <Link to="/login">Have an account? Go to logi</Link>
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
