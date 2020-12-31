import React, { Component } from "react";
import axios from "axios";

import DefaultImg from "../logo.svg";

const API_URL = "http://localhost:3000";

export default class Multer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multerImage: DefaultImg,
      firebaseImage: DefaultImg,
      baseImage: DefaultImg,
    };
  }
  uploadImage(e) {
    let imageFormObj = new FormData();
    imageFormObj.append("image", e.target.files[0]);

    axios
      .post(`${API_URL}/imageUpload`, imageFormObj)
      .then((response) => {
        alert("Image has been successfully uploaded using multer");
        console.log(response);
        this.setState({
          multerImage: response.data.data.imageUrl,
        });
      })
      .catch((err) => {
        alert("Error while uploading image using multer");
      });
  }
  render() {
    return (
      <div>
        <h1>Multer file upload</h1>
        <input type="file" name="image" onChange={(e) => this.uploadImage(e)} />
        <img src={this.state.multerImage} alt="upload-file" />
      </div>
    );
  }
}
