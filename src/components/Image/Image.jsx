import React, {Component} from "react";
import { connect } from "react-redux";

class Image extends Component {
  render() {
    const {
      image: { url, name = "" },
      activeTheme,
      className
    } = this.props;
    return (
      <div className={`${className} image-container`}>
        <img src={`/images/${activeTheme}${url}`} alt={name} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activeTheme: state.main.activeColorTheme
});
export default connect(mapStateToProps)(Image);
