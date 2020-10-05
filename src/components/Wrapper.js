import React from "react";
import "../styles/wrapper.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";

class Wrapper extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={this.props.dark ? "wrapper dark" : "wrapper"}>
        <Header handleDark={(valeur) => this.props.handleDark(valeur)} />
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
