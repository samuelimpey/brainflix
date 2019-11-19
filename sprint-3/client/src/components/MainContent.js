import React from "react";
import HeroVideo from "./mainContent/HeroVideo";
import VideoInfo from "./mainContent/VideoInfo";
import Comments from "./mainContent/Comments";
import NextVideos from "./mainContent/NextVideos";
import axios from "axios";

export default class MainContent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
    if (this.props.match.params.videoID !== prevProps.match.params.videoID) {
      axios
        .get(`http://localhost:5000/videos/${this.props.match.params.videoID}`)
        .then(response => {
          if (response.data.length > 0) {
            this.props.updateState(response.data[0]);
          }
        });
    }
  }
  render() {
    return (
      <>
        {this.props.current !== undefined &&
        this.props.next.length > 0 &&
        Object.keys(this.props.current).length > 0 ? (
          <main>
            <HeroVideo current={this.props.current} />
            <div className="main-content">
              <div className="main-content__video-specific">
                <VideoInfo current={this.props.current} />
                <Comments current={this.props.current} />
              </div>
              <NextVideos next={this.props.next} current={this.props.current} />
            </div>
          </main>
        ) : (
          <h1>LOADING.......</h1>
        )}
      </>
    );
  }
}
