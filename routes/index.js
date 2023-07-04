const express = require('express');
const { getContact, addContact } = require('../controllers');
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    statusCode: 200,
    message: 'Welcome to Contact API'
  });
});

router.get('/api/v1/contact', getContact);
router.post('/api/v1/contact', addContact);

module.exports = router;