import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import MainNavigation from "./components/Navigation";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div className={`App`}>
        <Router>
          <MainNavigation />
          <MainContent />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colorTheme: state.main.colorTheme
});

export default connect(mapStateToProps)(App);
