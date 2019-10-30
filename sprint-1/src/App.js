import React, { Component } from "react";
import Header from './components/Header';
import MainContent from './components/MainContent';
import video from './assets/images/video-list-0.jpg'



class App extends Component {
  constructor() {
    super();
    this.mainVideo = {
      id: 'type of <string>',
      title: 'BMX Rampage: 2018 Highlights ',
      description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
      channel: 'By Red Cow',
      image: video,
      views: '1,001,023',
      likes: '110,985',
      duration: 'type of <string>',
      video: 'type of <string>',
      timestamp: '12/18/2018',
      comments: [
        {
          avatar: "src/ assets / Images / Mohan - muruge.jpg",
          name: "Micheal Lyons",
          date: "12 / 18 / 2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
          avatar: "src/ assets / Images / Mohan - muruge.jpg",
          name: "Gary Wong",
          date: "12 / 18 / 2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
          avatar: "src / assets / Images / Mohan - muruge.jpg",
          name: "Theodore Duncan",
          date: "12 / 18 / 2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
        }


      ]
    }
    this.nextVideo = {
      id: 'type of <string>',
      title: 'type of <string>',
      channel: 'type of <string>',
      image: 'type of <string>'
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent next={this.nextVideo} current={this.mainVideo} />
      </div>
    );
  }
}



export default App;
