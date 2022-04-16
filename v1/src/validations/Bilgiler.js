
const Joi = require("joi");

const objectValidate = Joi.object({
  siparişler: [{
    yemek: [{
      isim: Joi.string(),
      fiyat: Joi.string(),
      içerik: Joi.array(),
    }]
  }]
});

const idValidate = Joi.object({
  id: Joi.string().required().alphanum()
});


module.exports = {
  objectValidate,
  idValidate
}