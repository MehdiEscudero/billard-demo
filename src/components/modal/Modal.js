import React from "react";
import "../modal/modal.css";

class Modal extends React.Component {
  state = {
    player: null,
    billard: null,
    pseudo: null,
    email: null,
    comment: null,
  };
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    console.log(event.target);
  }

  handleChangePlayer(event) {
    this.setState({
      player: event.target.value,
    });
  }

  handleChangeBillard(event) {
    this.setState({
      billard: event.target.value,
    });
  }

  handleChangePseudo(event) {
    this.setState({
      pseudo: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangeComment(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    alert("It's all in baby!" + this.state.value);
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

              <inputyes
                onChange={(event) => this.handleChangePseudo(event)}
                type="pseudo"
                id="pseudo"
                name="pseudo"
                placeholder="Pseudo"
              ></inputyes>
              <input
                onChange={(event) => this.handleChangeEmail(event)}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <textarea
                onChange={(event) => this.handleChangeComment(event)}
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
                    //type="submit"
                    className="btn-submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
