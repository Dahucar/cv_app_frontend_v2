import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { validateFieldsModal, converFields } from "../../../helpers/validateFieldsModal";
import { useForm } from "../../../hooks/useForm";

export const ModalResumeItem = ({
  itemsFormModal = [],
  onHide,
  onShow,
  title,
}) => {
  const inputsFild = converFields( itemsFormModal );
  const [ values, handleInputChangue, resetInputsValues ] = useForm({ ...inputsFild });

  const handlerResetForm = () => {
    resetInputsValues();
  }
  
  const handlerDefaultSubmit = (e) => {
    e.preventDefault();
    validateFieldsModal( values );
  }
  return (
    <Modal
      show={onShow}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={ handlerDefaultSubmit }>
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
                onChange={ handleInputChangue }
                autoComplete="off"
                placeholder={`${item.inputPlace}`}
              />
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button type="reset" variant="danger" onClick={handlerResetForm}>
            Reset fields
          </Button>
          <Button variant="success" type="submit">
            Save Resume
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
