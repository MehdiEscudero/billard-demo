import React from "react";
import data from "../mock.json";
import "../styles/common.css";
import Wrapper from "./Wrapper";
import Billard from "./Billard";
import "../styles/app.css";

class App extends React.Component {
  state = {
    selectedBillard: null,
    billardList: null,
    loading: true,
  };

  handleClick(value) {
    this.setState({
      selectedBillard: value,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        billardList: data,
        loading: false,
      });
    }, 3000);
  }
  render() {
    return this.state.loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <Wrapper data={data}>
        <Billard />
      </Wrapper>
    );
  }
}

export default App;
