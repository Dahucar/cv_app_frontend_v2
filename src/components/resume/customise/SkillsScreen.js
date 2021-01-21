import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { initialSkillsInput } from "../../../helpers/initialFormItems";
import { resumeItems } from "../../../helpers/resumeItems";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem";

export const SkillsScreen = () => {
  const [showModalSkill, setShowModalSkill] = useState(false);
  return (
    <>
      <Button
        variant="dark"
        className="container w-75 mt-2"
        block
        size="sm"
        onClick={() => setShowModalSkill(true)}
      >
        Add new skill <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={resumeItems} />
      {showModalSkill && (
        <ModalResumeItem
          itemsFormModal={initialSkillsInput}
          onShow={showModalSkill}
          onHide={() => setShowModalSkill(false)}
          title="Add your new skill item"
        />
      )}
    </>
  );
};
