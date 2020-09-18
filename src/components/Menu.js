import React from "react";
import "../styles/menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div>Menu</div>
        <button className="btn">Français</button>
        <button className="btn">Americain</button>
        <button className="btn">Anglais</button>
        <button className="btn">Snooker</button>
      </div>
    );
  }
}

export default Menu;
