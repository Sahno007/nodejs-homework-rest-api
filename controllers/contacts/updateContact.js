const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContactById = await Contact.findByIdAndUpdate(
    contactId,
    req.body,
    { new: true }
  );
  if (!updatedContactById) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(updatedContactById);
};

module.exports = updateContact;