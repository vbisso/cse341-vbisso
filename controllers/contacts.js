const { getDb } = require("../db/connection");
const allContacts = async (req, res) => {
  const db = getDb();
  const contacts = await db.collection("contacts").find().toArray();
  console.log(contacts);
  if (contacts.length === 0) {
    return res.status(404).json({ message: "No contacts found" });
  }
  res.json(contacts);
};

const oneContact = async (req, res) => {
  const db = getDb();
  const contact = await db.collection("contacts").findOne({
    firstName: req.params.id,
  });
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.json(contact);
};

module.exports = { allContacts, oneContact };
