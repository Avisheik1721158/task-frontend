const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/attachments", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the attachment schema
const attachmentSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  extension: String,
  uploadDate: { type: Date, default: Date.now },
});

const Attachment = mongoose.model("Attachment", attachmentSchema);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const attachments = req.files.map((file) => ({
      filename: file.originalname,
      path: file.path,
      size: file.size,
      extension: path.extname(file.originalname).substring(1),
    }));

    // Save attachments to the database
    const savedAttachments = await Attachment.insertMany(attachments);
    res.status(200).json({ files: savedAttachments });
  } catch (error) {
    res.status(500).json({ error: "File upload failed" });
  }
});

// Endpoint to get the count of attachments
app.get("/attachment-count", async (req, res) => {
  try {
    const count = await Attachment.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attachment count" });
  }
});

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
