import React from "react";
import "../styles/menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div>Menu</div>
        <button>Français</button>
        <button>Americain</button>
        <button>Anglais</button>
        <button>Snooker</button>
      </div>
    );
  }
}

export default Menu;
