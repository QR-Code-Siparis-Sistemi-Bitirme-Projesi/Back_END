/*bana gelen bilgilerin özelliklerinin belirtileceği kısım

    bilgiMetni: { type: String, required: true },
    yapilanYorumlar: { type: Array },
    begeniler: { type: Array }, 

    post için obje validasyonu
    delete, put (obje validasyonu) id validasyonu  
*/

const Joi = require("joi");

const objectValidate = Joi.object({
  //   bilgiMetni: Joi.string().required().min(50).max(300),
  bilgiMetni: Joi.string().required().min(10).max(300),
  yapilanYorumlar: Joi.array(),
  begeniler: Joi.array(),
});

const idValidate = Joi.object({
  //özel karakterkere izin verilmemesi alphanum() 
  id: Joi.string().required().alphanum(),
});

const updateValidate = Joi.object({
  //özel karakterkere izin verilmemesi alphanum() 
  _id: Joi.string().required().alphanum(),
  bilgiMetni: Joi.string().required().min(0).max(300),
  yapilanYorumlar: Joi.array(),
  begeniler: Joi.array(),
});


module.exports = {
  objectValidate,
  idValidate,
  updateValidate
}