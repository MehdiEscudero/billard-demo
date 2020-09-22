import React from "react";
import "../styles/menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div>Menu</div>
        {this.props.data.map((element, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => this.props.handleClick(element)}
          >
            {element.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Menu;
