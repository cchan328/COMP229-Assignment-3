import express from 'express';
const router = express.Router();

// Middleware to handle image and video asset redirection
router.use((req, res, next) => {
  const filePath = req.path;
  // Match common image and video extensions
  const assetPattern = /\.(svg|png|jpg|jpeg|mp4|ogv)$/i;

  if (assetPattern.test(filePath)) {
    // Redirect asset requests to the correct /src path
    return res.redirect(303, `http://localhost:3000/src${filePath}`);
  }

  // Not an asset URL, continue to next middleware or route
  next();
});

export default router;


