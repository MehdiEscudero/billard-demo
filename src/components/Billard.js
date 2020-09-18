import React from "react";
import "../styles/billard.css";
import Home from "./Home";
import Menu from "./Menu";

class Billard extends React.Component {
  render() {
    return (
      <div>
        <Home />

        <div className="billard">
          <div>Titre</div>
          <div>Images</div>
          <div>Dimensions</div>
          <div>Mode de jeu</div>
          <div>Texte</div>
          <div>Test PR</div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default Billard;
