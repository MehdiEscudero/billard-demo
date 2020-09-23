import React from "react";
import "../styles/wrapper.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="wrapper-content">
          <div className="billard-nav">
            <Home
              className="home"
              handleClick={(valeur) => this.props.handleClick(valeur)}
            />
            <Menu
              className="menu"
              data={this.props.data}
              handleClick={(valeur) => this.props.handleClick(valeur)}
            />
          </div>
          {this.props.children}
        </div>

        <Footer handleModal={(valeur) => this.props.handleModal(valeur)} />
      </div>
    );
  }
}

export default Wrapper;
