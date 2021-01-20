import React from "react";
import "./btn.css";
import { ResumeModal } from './ResumeModal';

export const BtnOptions = () => {
  
  const demo = () => {
    console.log('Opem modal -> dispatch action her');
  }

  return (
    <>
      <button type="button" className="float" onClick={ demo } data-toggle="modal" data-target="#resumeModal">
        <i className="fa fa-plus my-float"></i>
      </button>
      <ResumeModal />
    </>
  );
  
};
