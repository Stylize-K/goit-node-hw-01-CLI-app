//Імпортуємо необхідні модулі/пакети
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

//Створюємо абсолютний шлях для файлу contacts.json за допомогою вбудованного модуля path
const contactsPath = path.join(__dirname, "db", "contacts.json");

// Функція отримання списку всіх контактів
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Функція отримання необхідного існуючого контакту по contactId
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
};

// Функція встворення нового контакту
const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

// Функція видалення необхідного існуючого контакту по contactId
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

//Експортуємо функції для роботи з контактами у зівнішній код
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
