import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";

export const ResumeModal = (props) => {
  const [values, handleInputChangue, resetInputsValues] = useForm({
    rName: '',
  });

  const {rName} = values;

  // TODO: validate form
  const handlerSubmitResume = (e) => {
    e.preventDefault();
    if(!rName){
      return Swal.fire('Error', 'Please. Enter your resume name!.', 'error');
    }

    console.log('Resume saved! ->'+ rName);
    resetInputsValues();
    props.onHide();
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handlerSubmitResume}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formResume.nameControl">
            <Form.Label>Resume name</Form.Label>
            <Form.Control
              type="text"
              name="rName"
              autoComplete="off"
              onChange={handleInputChangue}
              placeholder="Enter your resume name"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
          <Button variant="success" type="submit">Save Resume</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
