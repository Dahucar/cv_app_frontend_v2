// react or dodule imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// component imports
import { Button } from "react-bootstrap";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem"; 
// helper imports
import { initialSkillsInput } from "../../../helpers/initialFormItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
import { resumeItems } from "../../../helpers/resumeItems";
// action of reducer imports
import { syncOpenModal, syncCloseModal  } from "../../../redux/actions/uiActions";

export const SkillsScreen = () => { 
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
      <Button
        variant="dark"
        className="container w-75 mt-2"
        block
        size="sm"
        onClick={ handlerOpenModal }
      >
        Add new skill <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={resumeItems} />
      {isOpen && (
        <ModalResumeItem
          toDispatch={ typesToDispatchForm.skills }
          itemsFormModal={ initialSkillsInput }
          onShow={ isOpen }
          onHide={ handlerCloseModal }
          title="Add your new skill item"
        />
      )}
    </>
  );
};
