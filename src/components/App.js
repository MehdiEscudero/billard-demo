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
    }, 1000);
  }
  render() {
    return this.state.loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <Wrapper
        handleClick={(valeur) => this.handleClick(valeur)}
        data={this.state.billardList}
      >
        {this.state.selectedBillard === null ? (
          <p>home</p>
        ) : (
          <Billard
            name={this.state.selectedBillard.name}
            text={this.state.selectedBillard.text}
            dimensions={this.state.selectedBillard.dimensions}
            img={this.state.selectedBillard.img}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
