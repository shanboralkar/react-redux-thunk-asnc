import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          Count incrementer : <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
