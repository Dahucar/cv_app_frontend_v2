import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { converFields } from "../../../helpers/validateFieldsModal";
import { useForm } from "../../../hooks/useForm";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";

export const ModalResumeItem = ({
  itemsFormModal = [],
  toDispatch,
  onHide,
  onShow,
  title,
}) => {
  // created field for custom hokks
  const inputsFild = converFields( itemsFormModal );
  const [ values, handleInputChangue, resetInputsValues ] = useForm({ ...inputsFild });

  const handlerResetForm = () => {
    resetInputsValues();
  }
  
  const handlerDefaultSubmit = (e) => {
    e.preventDefault();
    // TODO: validate field in the item acions
    switch (toDispatch) {
      case typesToDispatchForm.skills:
        console.table( values );
        console.log('IN THIS CASE GO TO SKILLS ACTION');
        break;
      case typesToDispatchForm.education:
        console.table( values );
        console.log('IN THIS CASE GO TO EDUCATION ACTION');
        break;
      case typesToDispatchForm.experience:
        console.table( values );
        console.log('IN THIS CASE GO TO EXPERIENCE ACTION');
        break;
      case typesToDispatchForm.other:
        console.table( values );
        console.log('IN THIS CASE GO TO OTHER ACTION');
        break;
      default:
        break;
    }
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
