import React, { Component } from "react";
import { connect } from "react-redux";

class testComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test area</h1>
        <h3>The answer is : {this.props.data}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.test.data,
  };
};

export default connect(mapStateToProps)(testComponent);
