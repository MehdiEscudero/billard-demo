import React from "react";
import "../styles/footer.css";
import Modal from "./modal/Modal";

class Footer extends React.Component {
  setModal() {}
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        <div className="footer-content">
          <div>Made by Mehdi Escudero</div>
          <button
            onClick={() => this.props.handleModal(false)}
            className="contact"
          >
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
