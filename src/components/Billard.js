import React from "react";
import "../styles/billard.css";
import Home from "./Home";
import Menu from "./Menu";

class Billard extends React.Component {
  render() {
    return (
      <div className="billard">
        <Home className="billard-content" />

        <div className="billard-content">
          <div>Titre</div>
          <div>Images</div>
          <div>Dimensions</div>
          <div>Mode de jeu</div>
          <div>Texte</div>
          <div>Test PR</div>
        </div>
        <Menu className="billard-content" />
      </div>
    );
  }
}

export default Billard;
