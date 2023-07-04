const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    statusCode: 200,
    message: 'Welcome to Contact API'
  });
});

module.exports = router;