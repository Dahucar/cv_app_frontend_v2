import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './auth.css';

export const LoginScreen = () => {
  const handlerLogin = e => {
    e.preventDefault();
    console.log('Login ->');
  }
  return (
    <div id="layoutSidenav_content">
      <main className="main">
        <Container>
          <Row className="justify-content-center"> 
            <Col xs lg="5">
              <Card className="shadow-lg border-0 rounded-lg mt-5">
                <Card.Header>
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={ handlerLogin }> 
                    <Form.Group controlId="formLogin.emailControl">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="formLogin.passwordControl">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="*****" />
                    </Form.Group>
                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                      <Link to="/reset-password"> Forgot Password?</Link>
                      <button type="submit" className="btn btn-primary">
                        Login
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
