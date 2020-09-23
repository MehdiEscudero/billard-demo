import React from "react";
import "../styles/billard.css";

class Billard extends React.Component {
  render() {
    return (
      <div className="billard">
        <div className="billard-content">
          <div className="billard-content-title">{this.props.name}</div>
          <div className="container-info">
            <img className="billard-content-images">{this.props.img}</img>
            <div className="jeu">
              <div className="billard-content-dimensions">
                {this.props.dimensions}
              </div>
              <div className="billard-content-jeu">{this.props.jeu}</div>
            </div>
          </div>

          <div className="billard-content-text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Billard;
