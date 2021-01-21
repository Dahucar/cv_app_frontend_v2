import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { resumeItems } from "../../../helpers/resumeItems";
import { typesToDispatchForm } from "../../../helpers/typesToDispatchForm";
import { ResumeItemsList } from "../customiseItems/ResumeItemsList";
import { ModalResumeItem } from "./ModalResumeItem";
import { initialOtherItems } from "../../../helpers/initialFormItems";

export const OthersScreen = () => {
  const [showModalOther, setShowModalOther] = useState(false);
  return (
    <>
      <Button
        variant="dark"
        className="container w-75 mt-2"
        block
        size="sm"
        onClick={() => setShowModalOther(true)}
      >
        Add new other <i className="fa fa-plus my-float"></i>
      </Button>
      <ResumeItemsList resumeItemList={resumeItems} />
      {showModalOther && (
        <ModalResumeItem
          toDispatch={ typesToDispatchForm.other }
          itemsFormModal={initialOtherItems}
          onShow={showModalOther}
          onHide={() => setShowModalOther(false)}
          title="Add your new other item"
        />
      )}
    </>
  );
};
