import React from "react";

import "../styles/common.css";
import Wrapper from "./Wrapper";

import Billard from "./Billard";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Billard />
      </Wrapper>
    );
  }
}
export default App;
