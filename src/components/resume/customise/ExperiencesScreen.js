import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { resumeItems } from "../../../helpers/resumeItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem";
import { initialExperiencesInput } from "../../../helpers/initialFormItems";

export const ExperiencesScreen = () => {
  const [showModalExp, setShowModalExp] = useState(false);
  return (
    <>
      <Button variant="dark" className="container w-75 mt-2" block size="sm"
        onClick={ () => setShowModalExp(true) }>
        Add new experience <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={ resumeItems }/>
      {showModalExp && (
        <ModalResumeItem 
          toDispatch={ typesToDispatchForm.experience }
          onShow={ showModalExp } 
          itemsFormModal={ initialExperiencesInput }
          onHide={ () => setShowModalExp(false) }
          title="Add your new experience item" />
      )}
    </>
  );
};
