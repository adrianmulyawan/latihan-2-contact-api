const models = require('../../databaseConfig/db/models');
const Contact = models.Contact;

const getContact = async (req, res) => {
  try {
    const getData = await Contact.findAll();

    if (getData.length < 1) {
      return res.status(200).json({
        statusCode: 200,
        message: 'Sorry, Contact is Still Empty!'
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Success Get Data Contact!',
      data: getData
    });
  } catch (error) {
    console.info(error.message, '=> Ada Error di getContact');
    return res.status(400).json({
      statusCode: 400,
      message: `Error Message: ${error.message}`
    });
  }
};

const addContact = async (req, res) => {
  try {
    const { full_name, phone_number, email, address } = req.body;

    if (!full_name || !phone_number || !email || !address) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Fullname, Phone Number, Email, and Address is Required!'
      });
    }

    const addNewContact = await Contact.create({
      full_name, phone_number, email, address
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Success Add New Contact!",
      data: addNewContact
    });

  } catch (error) {
    console.info(error.message, '=> Ada Error di getContact');
    return res.status(400).json({
      statusCode: 400,
      message: `Error Message: ${error.message}`
    });
  }
};

module.exports = {
  getContact,
  addContact,
};