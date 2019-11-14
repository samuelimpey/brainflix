import React from "react";
import Image from "../assets/images/Upload.jpg";

export default function Upload() {
  return (
    <>
      <main>
        <div className="upload">
          <h1 className="upload--title">Upload Video</h1>
          <div className="upload__video">
            <h5 className="upload__video--label">VIDEO THUMBNAIL</h5>
            <img src={Image} alt="thumbnail" className="upload__video--image" />
          </div>
          <form className="upload__inputs">
            <div className="upload__inputs--title">
              <label>TITLE YOUR VIDEO</label>
              <input
                type="text"
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
