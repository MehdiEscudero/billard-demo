import React from "react";
import "../styles/footer.css";

class Footer extends React.Component {
  render() {
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
