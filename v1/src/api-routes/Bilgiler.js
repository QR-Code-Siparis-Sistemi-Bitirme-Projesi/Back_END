const express = require("express");
const router = express.Router();
const { bilgiEkle, bilgiDuzenle, Sil } = require("../controllers/BilgilerController");
const Schemas = require("../validations/Bilgiler");
const { ObjectValidation, idValidation , updateValidation } = require("../middleware/validations");

router.get("/bilgiler", (req, res) => {

  console.log("İstek geldi...", req);

  console.log(`Gelen Request ${req}`);
  res.status(200).send({
    data: "link",
    createdTime: "121212",
  });
});

router.route("/api/bilgiekle").post(ObjectValidation(Schemas.objectValidate), bilgiEkle);

//değişecek
router.route("/api/bilgiduzenle").put(updateValidation(Schemas.updateValidate), bilgiDuzenle);
//router.route("/api/bilgiduzenle").put(ObjectValidation(Schemas.idValidate), bilgiDuzenle);//id validation ekle unutma
router.route("/api/bilgisil").post(Sil);

/** Test */
router.get("/test/testBilgiler", (req, res) => {
  res.status(200).send(); //??
});
router.route("/test/bilgiekle").post(ObjectValidation(Schemas.objectValidate), bilgiEkle);

module.exports = router;
