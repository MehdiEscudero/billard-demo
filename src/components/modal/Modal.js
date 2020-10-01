import React from "react";
import "../modal/modal.css";

class Modal extends React.Component {
  // alerte() {
  //   alert("Yoo");
  // }
  state = {
    player: null,
    billard: null,
    pseudo: null,
    email: null,
    comment: null,
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    this.alerte("It's all in baby!" + event.state.value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal-header">
            <button
              onClick={() => this.props.handleModal(false)}
              className="close-modal-btn"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            <form className="modal-body">
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
                onChange={(event) => this.handleChange(event)}
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
                <div>
                  <button
                    onClick={(event) => this.handleSubmit(event)}
                    type="submit"
                    className="btn-submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
