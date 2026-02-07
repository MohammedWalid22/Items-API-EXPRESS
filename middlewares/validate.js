const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
    price: { type: "number", minimum: 1 }
  },
  required: ["name", "price"],
  additionalProperties: false
};

const validate = ajv.compile(schema);

module.exports = (req, res, next) => {
  const valid = validate(req.body);
  if (!valid) {
    return res.status(400).json(validate.errors);
  }
  next();
};
