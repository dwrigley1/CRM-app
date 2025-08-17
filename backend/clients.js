const db = require("./database");

const Client = db.model(
  "Client",
  {
    account_number: { type: Number, required: true },
    address: { type: String },
    name: { type: String },
    system_type: { type: String },
  },
  "CRM Clients" // Explicit collection name to accommodate capital letters & space
);

module.exports = Client;
