const Image = require("../models/image");

const saveIamge = (req, res, next) => {
  const newBlog = {
    imageUrl: req.image,
  };

  Image.create(newBlog)
    .then((image) => {
      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.json({ status: "Image uploaded successfully", data: image });
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: "Invalid Object Property", error: err });
    });
};

module.exports = {
  saveIamge,
};
