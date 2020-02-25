import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../../containers/pages/Main";
import About from "../../containers/pages/About";
import Photo from "../../containers/pages/Photo";
import Video from "../../containers/pages/Video";

class MainContent extends Component {
  renderContent = () => (
    <div className="page">
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/main" />
      </Switch>
    </div>
  );

  render() {
    return this.renderContent();
  }
}

export default MainContent;
