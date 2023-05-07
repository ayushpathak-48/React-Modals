import React from "react";
import "./index.css";
const Modal = ({ isModalopen, setIsModalopen }) => {
  return (
    <div className={`modal ${isModalopen ? "modal-open" : "modal-close"}`}>
      <div className="modal-body">
        <div className="modal-head">! This is Modal Part 2!</div>
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
  );
};

export default Modal;
