const fs = require("fs");
const Ajv = require("ajv");

const validator = new Ajv();

const rawSchema = fs.readFileSync("./src/attributes.json");
const schema = JSON.parse(rawSchema);

const rawDB = fs.readFileSync("./src/devices.json");
const DB = JSON.parse(rawDB);

DB.forEach(product => {
  const validProduct = validator.validate(schema, product);
  if (!validProduct) {
    console.error(validator.errors);
  }
});
