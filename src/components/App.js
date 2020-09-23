import React from "react";
import data from "../mock.json";
import "../styles/common.css";
import Wrapper from "./Wrapper";
import Billard from "./Billard";

class App extends React.Component {
  state = {
    selectedBillard: null,
    billardList: null,
    loading: true,
    modal: false,
  };

  handleClick(value) {
    this.setState({
      selectedBillard: value,
    });
  }

  handleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  closeModalHandler() {
    setModal = false;
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
          <img
            className="billard-content"
            src="https://i.pinimg.com/originals/f2/1f/9c/f21f9c91a68189c6958def13bc693704.jpg"
            alt="fond pour home"
          />
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
