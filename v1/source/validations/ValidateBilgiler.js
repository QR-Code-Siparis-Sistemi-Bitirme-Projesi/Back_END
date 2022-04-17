
const Joi = require("joi");

//Şemanın doğrulanıp onaylanması.
const objectValidate = Joi.object({
  siparişler: [{
    yemek: [{
      isim: Joi.string(),
      fiyat: Joi.string(),
      içerik: Joi.array(),
    }],
    icecek: Joi.array()
  }]
});

const idValidate = Joi.object({
  id: Joi.string().required().alphanum()
});


module.exports = {
  objectValidate,
  idValidate
}