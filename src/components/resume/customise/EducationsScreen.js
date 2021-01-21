// react or dodule imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// component imports
import { Button } from "react-bootstrap";
import { ModalResumeItem } from "./ModalResumeItem";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
// helper imports
import { resumeItems } from "../../../helpers/resumeItems";
import { initialEducationItems } from "../../../helpers/initialFormItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
// action of reducer imports
import { syncOpenModal, syncCloseModal  } from "../../../redux/actions/uiActions";

export const EducationsScreen = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.ui);

  const handlerOpenModal = () => {
    dispatch( syncOpenModal() );
  }

  const handlerCloseModal = () => {
    dispatch( syncCloseModal() );
  }
  
  return (
    <>
      <Button variant="dark" className="container w-75 mt-2" block size="sm"
        onClick={ handlerOpenModal }>
        Add new education <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={ resumeItems }/>
      {isOpen && (
        <ModalResumeItem 
          toDispatch={ typesToDispatchForm.education }
          itemsFormModal={ initialEducationItems }
          onShow={ isOpen }
          onHide={ handlerCloseModal }
          title="Add your new education item" />
      )}
    </>
  );
};
