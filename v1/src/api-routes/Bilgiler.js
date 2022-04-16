const express = require("express");
const router = express.Router();
const {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
  bilgileriAl,
} = require("../controllers/BilgilerController");
const Schemas = require("../validations/Bilgiler");
const { ObjectValidation, IdValidate } = require("../middleware/validations");

router.route(process.env.GET_LISTELE).get(bilgileriAl);

router
  .route(process.env.POST_EKLE)
  .post(ObjectValidation(Schemas.objectValidate), bilgiEkle);

router.route(process.env.PUT_DUZENLE).put(
  IdValidate(Schemas.idValidate),
  (req, res, next) => {
    console.log("Düzenle ikinci middleware metodu!! - req \n", req.body);
    next();
  },
  bilgiDuzenle
);

router.route(process.env.DELETE_SIL).delete(bilgiSil);

router.get(process.env.GET_TEST, (req, res) => {
  res.status(200).send(); //??
});

module.exports = router;
