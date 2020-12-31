const express = require("express");

const { saveIamge } = require("../controllers/imageController");

//middlewares
const { uploadImage } = require("../middlewares/imageMiddlewares");

const { multerUploads } = require("../config/multerConfig");
const { cloudinaryConfig } = require("../config/cloudinaryConfig");

const imageRouter = express.Router();

imageRouter
  .route("/")
  .post(cloudinaryConfig, multerUploads, uploadImage, saveIamge);

module.exports = imageRouter;
