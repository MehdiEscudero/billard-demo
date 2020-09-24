import React from "react";
import "../styles/billard.css";

class Billard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="billard">
        <div className="billard-content">
          <div className="billard-content-title">{this.props.name}</div>
          <div className="container-info">
            <img
              src={this.props.img}
              className="billard-content-images"
              alt="billards"
            />

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
