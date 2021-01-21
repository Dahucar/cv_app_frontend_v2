import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ResumeModal } from "./ResumeModal";
import "./btn.css";

export const BtnOptions = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="dark"
        className="mt-2"
        size="sm"
        block
        onClick={() => setModalShow(true)}
      >
        <i className="fa fa-plus my-float"></i>
      </Button>
      {modalShow && (
        <ResumeModal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </>
  );
};
