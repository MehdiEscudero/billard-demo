import React from "react";
import "../styles/billard.css";
import Home from "./Home";
import Menu from "./Menu";

class Billard extends React.Component {
  render() {
    return (
      <div className="billard">
        <div className="billard-nav">
          <Home className="home" />
          <Menu className="menu" />
        </div>

        <div className="billard-content">
          <div>Titre</div>
          <div>Images</div>
          <div>Dimensions</div>
          <div>Mode de jeu</div>
          <div>Texte</div>
          <div>Test PR</div>
        </div>
      </div>
    );
  }
}

export default Billard;
