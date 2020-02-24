import React, { Component } from "react";
import Card from "../../../components/Card";
import Loader from "../../../components/Loader";
import ErrorBoundary from "../../../components/ErrorBoundary";
import { moveMouse } from "../../../redux/actions";
import { fetchCards } from "../../../redux/thunk";
import { connect } from "react-redux";

class About extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    const { cards } = this.props.about;
    return cards.loading === true ? (
      <Loader />
    ) : cards.error ? (
      <ErrorBoundary message={cards.error} />
    ) : (
      <div className="page-about" onMouseMove={e => this.props.moveMouse(e)}>
        <div className="grid-container">
          <Card
            {...cards.main}
            options="main"
            className="grid-item grid-item--main"
          />
          {cards.hasOwnProperty("common") &&
            cards.common.map((itemCard, index) => {
              return (
                <Card
                  key={index}
                  {...itemCard}
                  className={`grid-item grid-item--${index}`}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { about: state.about };
};
export default connect(mapStateToProps, { moveMouse, fetchCards })(About);
