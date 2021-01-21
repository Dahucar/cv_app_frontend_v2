import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const ModalResumeItem = ({
  itemsFormModal = [],
  onHide,
  onShow,
  title,
}) => {
  console.log(onHide, onShow);
  return (
    <Modal
      show={onShow}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {itemsFormModal.map((item) => (
            <Form.Group
              key={item.inputName}
              controlId={`form.${item.inputName}`}
            >
              <Form.Label>{item.inputLabel}</Form.Label>
              <Form.Control
                type={`${item.inpuType}`}
                name={`${item.inputName}`}
                autoComplete="off"
                placeholder={`${item.inputPlace}`}
              />
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onHide}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Save Resume
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
