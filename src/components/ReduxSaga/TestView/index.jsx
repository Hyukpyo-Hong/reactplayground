import React, { Component } from "react";
import { connect } from "react-redux";
import Stats from "./Stats";
import { loadImages } from "../actions";

class TestView extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    return (
      <>
        <div>{this.props.isLoading}</div>
        <button onClick={this.props.loadImages}>Load Images</button>
        {this.props.images &&
          this.props.images.map((image, idx) => (
            <div key={idx}>
              <Stats stats={this.props.imageStats[0]} />
              <img
                key={idx}
                src={image.download_url}
                width="100px"
                height="100px"
                alt="hmm"
              />
            </div>
          ))}
        {this.props.error && <div>Erorr {this.props.error}</div>}
      </>
    );
  }
}
const mapStatetoProps = ({ isLoading, images, error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TestView);
