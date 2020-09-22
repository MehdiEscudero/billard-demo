import React from "react";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <button className="home" onClick={() => this.props.handleClick(null)}>
        Home
      </button>
    );
  }
}

export default Home;
