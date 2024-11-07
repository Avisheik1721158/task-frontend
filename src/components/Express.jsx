const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("files"), (req, res) => {
  const fileData = req.files.map((file) => ({
    name: file.originalname,
    path: file.path,
    extension: path.extname(file.originalname),
  }));
  res.json({ files: fileData });
});

app.listen(3000, () => console.log("Server running on port 3000"));
