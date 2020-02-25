import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import mainMenu from "../../conf/menu";
import colorThemes from "../../conf/colorThemes";
import { changeColorTheme } from "../../redux/actions";
import Select from "../../components/Select";

class MainNavigation extends Component {
  changeStyle = (nameTheme) => {
    this.props.changeColorTheme(nameTheme);
    document.getElementsByTagName("link")[0].href = `/css/${nameTheme}.css`;
  };
  render() {
    const {
      location: { pathname },
      activeColorTheme
    } = this.props;
    return (
      <>
        <div className="navigation">
          <div className="main-navigation">
            {mainMenu.map(({ index, name, href }) => {
              const active = pathname === href ? "--active" : "";
              return (
                <Link to={href} key={index} className={`nav-tabs${active}`}>
                  {name}
                </Link>
              );
            })}
          </div>
          {pathname === "/main" || "/about" ? (
            <Select
              name="Styles"
              tabs={colorThemes}
              active={activeColorTheme}
              functionForTabs={this.changeStyle}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  activeColorTheme: state.main.activeColorTheme
});
export default withRouter(connect(mapStateToProps, {changeColorTheme})(MainNavigation));
