import React from "react";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">Billards World</div>
        <button onClick className="dark">
          Dark mode
        </button>
      </div>
    );
  }
}

export default Header;
