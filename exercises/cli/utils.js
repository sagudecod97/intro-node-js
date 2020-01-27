const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'
const filePath = path.join(__dirname, contactsLocation) // Joins the full path until the name of the file

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contacts = fs.readFileSync(filePath).toString();
  const contacsObject = JSON.parse(contacts)
  return contacsObject
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const newContacs = {
    contacts
  }

  fs.writeFileSync(filePath, JSON.stringify(newContacs, null)); // This null changes the format of Package.JSON
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

