import React, { Component } from "react";
import Loader from "../../../components/Loader";
import ErrorBoundary from "../../../components/ErrorBoundary";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    const { main } = this.props;
    return main.loading === true ? (
      <Loader />
    ) : main.error ? (
      <ErrorBoundary message={main.error} />
    ) : (
      <div className="page-main">MAIN PAGE
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { main: state.main };
};
export default connect(mapStateToProps)(Main);
