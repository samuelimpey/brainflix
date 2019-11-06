import React, { Component } from "react";
import Header from './components/Header';
import MainContent from './components/MainContent';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";



class App extends Component {
  state = {
    videos: [],
    currentVid: {},
    id: "",
  }
  componentDidMount() {
    axios.get("https://project-2-api.herokuapp.com/videos?api_key=8a316df3-fb97-4957-a135-d31dcd062cd1").then(response => {
      console.log(response.data)
      this.setState({
        videos: response.data,
        id: response.data[0].id
        // currentVid: response.data[0]
      })
    })

    axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=8a316df3-fb97-4957-a135-d31dcd062cd1`).then(response => {
      console.log(this.state.id)

      this.setState({
        currentVid: response.data
      })
    })
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.match.params.id != prevState.match.params.id) {

  //   }
  //   axios.get(`https://project-2-api.herokuapp.com/videos/:${this.id}?api_key=8a316df3-fb97-4957-a135-d31dcd062cd1`).then(response => this.setState({
  //     currentVid: response.data
  //   }))
  // }
  render() {
    console.log(this.state.currentVid);
    return (
      <BrowserRouter>
        <>
          <Header />
          <MainContent next={this.state.videos} current={this.state.currentVid} currentID={this.state.id} />
          <Switch>
            <Route path="video/:videoID" exact component={MainContent} />
          </Switch>
        </>
      </BrowserRouter >
    );
  }
}



export default App;
