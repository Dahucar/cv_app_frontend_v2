import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { resumeItems } from "../../../helpers/resumeItems";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem";
import { initialEducationItems } from "../../../helpers/initialFormItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";

export const EducationsScreen = () => {
  const [showModalEducation, setShowModalEducation] = useState(false);
  return (
    <>
      <Button variant="dark" className="container w-75 mt-2" block size="sm"
        onClick={ () => setShowModalEducation(true) }>
        Add new education <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={ resumeItems }/>
      {showModalEducation && (
        <ModalResumeItem 
          toDispatch={ typesToDispatchForm.education }
          itemsFormModal={initialEducationItems}
          onShow={ showModalEducation }
          onHide={ () => setShowModalEducation(false) }
          title="Add your new education item" />
      )}
    </>
  );
};
