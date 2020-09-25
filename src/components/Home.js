import React from "react";
import "../styles/home.css";
import iconHome from "../images/home-page.png";

class Home extends React.Component {
  render() {
    return (
      <button className="home" onClick={() => this.props.handleClick(null)}>
        <img className="iconHome" src={iconHome} alt="icon home" />
      </button>
    );
  }
}

export default Home;
