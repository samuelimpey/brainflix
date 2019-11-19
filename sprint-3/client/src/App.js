import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVid: {},
      id: ""
    };
  }

  updateState = newState => {
    console.log(newState);
    this.setState({
      currentVid: newState
    });
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/videos`)
      .then(response => {
        this.setState({
          videos: response.data
        });
        return response.data[0].id;
      })
      .then(videoId => {
        axios.get(`http://localhost:5000/videos/${videoId}`).then(resp => {
          this.setState({
            currentVid: resp.data[0],
            id: resp.data[0].id
          });
        });
      });
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <MainContent
                next={this.state.videos}
                current={this.state.currentVid}
                currentID={props.match.params.videoID}
                {...props}
              />
            )}
          />
          <Route
            path="/videos/:videoID"
            render={props => (
              <MainContent
                next={this.state.videos}
                current={this.state.currentVid}
                currentID={props.match.params.videoID}
                updateState={this.updateState}
                {...props}
              />
            )}
          />
          <Route path="/upload" component={Upload} />
        </Switch>
      </>
    );
  }
}

export default App;
