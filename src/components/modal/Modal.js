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

  handleChange(event, state) {
    this.setState({
      [state]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("ici");
    console.log(this.state);
    alert(
      this.state.player +
        "  " +
        this.state.billard +
        "  " +
        this.state.pseudo +
        "  " +
        this.state.email +
        "  " +
        this.state.comment
    );
  }
  render() {
    console.log(this.props);
    console.table(
      !this.state.player &&
        !this.state.billard &&
        !this.state.pseudo &&
        !this.state.email &&
        !this.state.comment
    );
    return (
      <div className="modal">
        <div
          onClick={() => this.props.handleModal()}
          className="forclick"
        ></div>
        <div className="modal-wrapper">
          <div className="modal-header">
            <button
              onClick={() => this.props.handleModal()}
              className="close-modal-btn"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            <div className="modal-body">
              <span onChange={(event) => this.handleChange(event, "player")}>
                Are you a player?
                <input type="radio" id="yes" name="positive" value="yes" />
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="negative" value="no" />
                <label for="no">No</label>
              </span>

              <label>
                Choose your billard
                <select
                  onChange={(event) => this.handleChange(event, "billard")}
                >
                  <option value="billard">--Choose your billard--</option>

                  <option value="francais">Français</option>
                  <option value="americain">Americain</option>
                  <option value="anglais">Anglais</option>
                  <option value="snooker">Snooker</option>
                </select>
              </label>

              <input
                onChange={(event) => this.handleChange(event, "pseudo")}
                type="pseudo"
                id="pseudo"
                name="pseudo"
                placeholder="Pseudo"
              ></input>
              <input
                onChange={(event) => this.handleChange(event, "email")}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              ></input>
              <textarea
                onChange={(event) => this.handleChange(event, "comment")}
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
                    disabled={
                      !this.state.player ||
                      !this.state.billard ||
                      !this.state.pseudo ||
                      !this.state.email ||
                      !this.state.comment
                    }
                    onClick={(event) => this.handleSubmit(event)}
                    //type="submit"
                    id="button"
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
