import express from "express";

const router = express.Router();

// Check for supported image or video file extensions
const isImage = (filePath) =>
  filePath.match(/\.(svg|png|jpg|jpeg)$/i);

const isVideo = (filePath) =>
  filePath.match(/\.(mp4|ogv)$/i);

router.get('*', (req, res) => {
  const filePath = req.path;

  if (isImage(filePath) || isVideo(filePath)) {
    res.redirect(303, `http://localhost:3000/src${filePath}`);
  } else {
    res.status(404).send('Asset not found');
  }
});

export default router;

