import React from "react";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-title">Billards World</div>
          <button
            onClick={() => this.props.handleDark(false)}
            className="header-dark"
          >
            Dark mode
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
