import React from "react";
import data from "../mock.json";
import "../styles/common.css";
import Wrapper from "./Wrapper";
import Billard from "./Billard";

class App extends React.Component {
  state = { selectedBillard: null };
  handleClick(value) {
    if (value === null) {
      this.setState({
        selectedBillard: null,
      });
    } else {
      this.setState({
        selectedBillard: data[value].name,
      });
      console.log(`Clicked on ${data[value].name}`);
    }
  }
  render() {
    return (
      <Wrapper data={data}>
        <Billard />
      </Wrapper>
    );
  }
}

export default App;
