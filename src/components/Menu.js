import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div>Menu</div>
        <button onClick>Français</button>
        <button onClick>Americain</button>
        <button onClick>Anglais</button>
        <button onClick>Snooker</button>
      </div>
    );
  }
}

export default Menu;
