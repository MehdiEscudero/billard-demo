import React from "react";
import "../styles/billard.css";

class Billard extends React.Component {
  render() {
    return (
      <div className="billard">
        <div className="billard-content">
          <div className="billard-content-title">Titre</div>
          <div className="container-info">
            <div className="billard-content-images">Images</div>
            <div className="jeu">
              <div className="billard-content-dimensions">Dimensions</div>
              <div className="billard-content-jeu">Mode de jeu</div>
            </div>
          </div>

          <div className="billard-content-text">Texte</div>
        </div>
      </div>
    );
  }
}

export default Billard;
