const { getDb } = require("../db/connection");
const { ObjectId } = require("mongodb");

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
const newContact = async (req, res) => {
  const db = getDb();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const result = await db.collection("contacts").insertOne({
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday,
  });
  res.status(201).json({
    message: "Contact created successfully",
    id: result.insertedId,
  });
};

const updateContact = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  const updated = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  await db
    .collection("contacts")
    .updateOne({ _id: new ObjectId(id) }, { $set: updated });
  return res.sendStatus(204).json({ message: "Contact updated successfully" });
};

const deleteContact = async (req, res) => {
  const db = getDb();
  const id = req.params.id;
  await db.collection("contacts").deleteOne({ _id: new ObjectId(id) });
  return res.sendStatus(200).json({ message: "Contact deleted successfully" });
};
module.exports = {
  allContacts,
  oneContact,
  newContact,
  updateContact,
  deleteContact,
};
