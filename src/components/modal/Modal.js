import React from "react";
import "../modal/modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal-header">
            <span className="close-modal-btn">X</span>
          </div>
          <div className="modal-content">
            <div className="modal-body">
              <span>
                Are you a player?
                <input type="checkbox" id="yes" name="no" />
                <label for="yes">Yes</label>
                <input type="checkbox" id="no" name="no" />
                <label for="no">No</label>
              </span>

              <select name="billards" id="billard-select">
                <option value="">--Choose your billard--</option>
                <option value="francais">Français</option>
                <option value="americain">Americain</option>
                <option value="anglais">Anglais</option>
                <option value="snooker">Snooker</option>
              </select>

              <input
                type="pseudo"
                id="pseudo"
                name="pseudo"
                placeholder="Pseudo"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <textarea
                className="textarea"
                id="comment"
                name="comment"
                placeholder="Type here..."
                rows="5"
                cols="33"
              ></textarea>
              <div className="modal-footer">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
