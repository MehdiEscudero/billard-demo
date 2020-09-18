import React from "react";
import "../styles/wrapper.css";
import Footer from "./Footer";
import Header from "./Header";

class Wrapper extends React.Component {
  render(props) {
    return (
      <div>
        <Header />
        <div className="wrapper">{this.props.children}</div>;
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
