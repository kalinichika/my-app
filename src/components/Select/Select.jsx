import React, { Component } from "react";

export default class Select extends Component {
  state = {
    isOpenSelectMenu: false
  };
  toggleSelectMenu = () => {
    let result = false;
    if (this.state.isOpenSelectMenu === false) result = true;
    this.setState({ isOpenSelectMenu: result });
  };
  getSelectItem = (tabs, active, functionForTabs) => {
    if (this.state.isOpenSelectMenu === true)
      return tabs.map((name, index) => {
        const activeClass = name === active ? "--active" : "";
        return (
          <div
            key={index}
            className={`select-tabs${activeClass}`}
            onClick={()=>functionForTabs(name)}
          >
            {name}
          </div>
        );
      });
  };

  render() {
    const { name, tabs, active, functionForTabs } = this.props;
    return (
      <div className="select-container">
        <div
          className="select-tabs-menu"
          onClick={() =>this.toggleSelectMenu()}
        >
          {name}
        </div>
        {this.getSelectItem(tabs, active, functionForTabs)}
      </div>
    );
  }
}
