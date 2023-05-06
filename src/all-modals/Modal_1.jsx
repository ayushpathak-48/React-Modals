import React from "react";

const Modal_1 = ({ isModalopen, setIsModalopen }) => {
  return (
    <>
      <div className={`modal ${isModalopen ? "modal-open" : "modal-close"}`}>
        <div className="modal-body">
          <div className="modal-head">! Hello World This is Nice!</div>
          <div className="modal-footer">
            <div
              className="modal-btn"
              onClick={() => {
                setIsModalopen(!isModalopen);
              }}
            >
              Close
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal_1;
