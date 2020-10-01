import React from "react";
import data from "../mock.json";
import "../styles/common.css";
import Wrapper from "./Wrapper";
import Billard from "./Billard";
import Modal from "./modal/Modal";
import fond from "../images/salle-ancienne.jpg";

class App extends React.Component {
  state = {
    selectedBillard: null,
    billardList: null,
    loading: true,
    modal: false,
    dark: false,
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

  handleDark() {
    this.setState({
      dark: !this.state.dark,
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
        handleModal={() => this.handleModal()}
        handleDark={() => this.handleDark()}
      >
        {this.state.selectedBillard === null ? (
          <img className="billard-content" src={fond} alt="fond pour home" />
        ) : (
          <Billard
            name={this.state.selectedBillard.name}
            text={this.state.selectedBillard.text}
            dimensions={this.state.selectedBillard.dimensions}
            img={this.state.selectedBillard.img}
          />
        )}
        {this.state.modal ? (
          <Modal handleModal={() => this.handleModal()} />
        ) : null}
      </Wrapper>
    );
  }
}

export default App;
