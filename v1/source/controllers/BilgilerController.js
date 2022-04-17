const logger = require("../scripts/logger/bilgilerLogger");
const { insert, remove, update, list } = require("../services/BilgilerService");

const SiparisEkle = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
      logger.info("Sipariş eklendi. Eklenen bilgi - ", req.body);
    })
    .catch((err) => {
      logger.error("Sipariş ekleme hatası - ", err);
      res.status(500).send({ resData: "Veriler uygun değil..." });
    });
  };
  const SiparisDuzenle = (req, res) => {
    update(req.body)
    .then((response) => {
      logger.info("Sipariş düzenlendi. Yeni bilgi - ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Sipariş eklenemedi, hata: ", err);
      res.status(500).send({ resData: "Düzenleme yapılamadı." });
    });
  };
  
  const SiparisleriAl = (req, res) => {
    list()
    .then((response) => {
      res.status(200).send({ resData: response });
      logger.info("Sipariş bilgileri alındı.");
    })
    .catch((err) => {
      logger.error("Sipariş bilgileri alınamadı, hata: ", err);
      res
      .status(500)
      .send({ resData: "Bilgiler alınamadı." });
    });
  };
  
  const SiparisSil = (req, res) => {
    remove(req.body)
    .then((response) => {
      logger.info("Sipariş silindi. Silinen id: ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Sipariş silme hatası, hata: ", err);
      res
        .status(500)
        .send({ resData: "Silme işlemi Başarısız." });
    });
};

module.exports = {
  SiparisEkle,
  SiparisDuzenle,
  SiparisSil,
  SiparisleriAl
};
