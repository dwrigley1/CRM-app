const db = require("./database");

const Client = db.model(
  "clients",
  {
    account_number: { type: Number, required: true },
    address: { type: String },
    name: { type: String },
    system_type: { type: String },
  }
);

module.exports = Client;
