const db = require("./database");

const Client = db.model("Client", {
  result: { type: String }
});

module.exports = Client;
