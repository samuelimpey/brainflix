import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
    this.setState({
      currentVid: newState
    });
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://localhost:5000/videos")
      .then(response => {
        this.setState({
          videos: response.data
        });
        return response.data[0].id;
      })
      .then(videoId => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=8a316df3-fb97-4957-a135-d31dcd062cd1`
          )
          .then(resp => {
            // console.log(resp);
            this.setState({
              currentVid: resp.data,
              id: resp.data.id
            });
          });
      });
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    console.log(this.state.id);
    return (
      <>
        <Header />
        {/* <BrowserRouter> */}
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
            path="/video/:videoID"
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
        {/* </BrowserRouter> */}
      </>
    );
  }
}

export default App;
