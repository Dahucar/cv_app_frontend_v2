// react or dodule imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// component imports
import { Button } from "react-bootstrap";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem";
// helper imports
import { resumeItems } from "../../../helpers/resumeItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
import { initialExperiencesInput } from "../../../helpers/initialFormItems";
// action of reducer imports
import { syncOpenModal, syncCloseModal  } from "../../../redux/actions/uiActions";

export const ExperiencesScreen = () => {
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
        Add new experience <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={ resumeItems }/>
      {isOpen && (
        <ModalResumeItem 
          toDispatch={ typesToDispatchForm.experience }
          onShow={ isOpen } 
          itemsFormModal={ initialExperiencesInput }
          onHide={ handlerCloseModal }
          title="Add your new experience item" />
      )}
    </>
  );
};
