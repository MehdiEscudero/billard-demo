import React from "react";
import "../modal/modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-header">
          <div>Welcome to lmy first Modal</div>
          <span className="close-modal-btn">X</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h4>Modal</h4>
            <div className="modal-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla nobis error eaque, ullam nisi maxime dicta id deserunt,
              corporis accusamus ad soluta ipsum. Repellendus reiciendis
              architecto minima pariatur accusamus!
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
