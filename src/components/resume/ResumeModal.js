import React from "react";

export const ResumeModal = ({}) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div
      className="modal fade"
      id="resumeModal"
      tabIndex="-1"
      aria-labelledby="resumeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content" onSubmit={ handlerSubmit }>
          <div className="modal-header">
            <h5 className="modal-title" id="resumeModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter your resume title" name="rTitle" autoComplete="off"/>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Add Resume
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
