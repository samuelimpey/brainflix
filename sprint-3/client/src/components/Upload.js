import React, { Component } from "react";
import Image from "../assets/images/Upload.jpg";
import axios from "axios";

export default class Upload extends Component {
  uploadVid = event => {
    event.preventDefault();

    if (!event.target.title.value || !event.target.description.value) {
      alert("Please dont leave any fields blank");
    } else {
      axios
        .post("http://localhost:5000/videos", {
          description: event.target.description.value,
          title: event.target.title.value,
          image: Image
        })
        .then(res => {
          console.log(res);
        });
      event.target.reset();
    }
  };
  render() {
    return (
      <>
        <main>
          <div className="upload">
            <h1 className="upload--title">Upload Video</h1>

            <form className="upload__inputs" onSubmit={this.uploadVid}>
              <div className="upload__inputs--sep">
                <div className="upload__video">
                  <h5 className="upload__video--label">VIDEO THUMBNAIL</h5>
                  <img
                    src={Image}
                    alt="thumbnail"
                    name="image"
                    className="upload__video--image"
                  />
                </div>
                <div className="upload__inputs--sep2">
                  <div className="upload__inputs--title">
                    <label>TITLE YOUR VIDEO</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Add a title to your video"
                      className="upload__inputs--title--input"
                    />
                  </div>
                  <div className="upload__inputs--description">
                    <label>ADD A VIDEO DESCRIPTION</label>
                    <textarea
                      name="description"
                      className="upload__inputs--description--input"
                      placeholder="Add a description of your video"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="upload__inputs--buttons">
                <button className="upload__inputs--buttons--publish">
                  PUBLISH
                </button>
                <button className="upload__inputs--buttons--cancel">
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </main>
      </>
    );
  }
}
