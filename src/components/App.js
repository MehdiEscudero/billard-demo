import React from "react";
import data from "../mock.json";
import "../styles/common.css";
import Wrapper from "./Wrapper";
import Billard from "./Billard";

class App extends React.Component {
  state = { selectedBillard: null };
  render() {
    return (
      <Wrapper data={data}>
        <Billard />
      </Wrapper>
    );
  }
}

export default App;
