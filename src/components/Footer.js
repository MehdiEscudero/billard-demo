import React from "react";
import "../styles/footer.css";
import Modal from "./modal/Modal";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div>Made by Mehdi Escudero</div>
          <button onClick={() => setModal(true)} className="contact">
            Contact
          </button>
          <Modal modal={modal} closeModalHandler={closeModalHandler} />
        </div>
      </div>
    );
  }
}

export default Footer;
