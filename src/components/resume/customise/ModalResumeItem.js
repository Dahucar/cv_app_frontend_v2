// react or dodule imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// component imports
import { Button, Form, Modal, Spinner } from "react-bootstrap";
// helper imports
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
import { converFields } from "../../../helpers/validateFieldsModal";
import { useForm } from "../../../hooks/useForm";
// action of reducer imports
import { asyncAddSkill } from "../../../redux/actions/skillAction";

export const ModalResumeItem = ({
  itemsFormModal = [],
  toDispatch,
  onHide,
  onShow,
  title,
}) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.ui);
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
        dispatch( asyncAddSkill(values) );
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
                required
                type={`${item.inpuType}`}
                name={`${item.inputName}`}
                onChange={ handleInputChangue }
                autoComplete="off"
                disabled={isLoading}
                placeholder={`${item.inputPlace}`}
              />
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button type="reset" variant="danger" onClick={handlerResetForm} disabled={isLoading}>
            Reset fields
          </Button>
          <Button variant="success" type="submit" disabled={isLoading}>
            {isLoading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Save Resume
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
