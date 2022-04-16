const mongoose = require("mongoose");
const logger = require("../scripts/logger/bilgilerLogger");

const BilgiSchema = new mongoose.Schema(
  {
    siparişler: [{
      yemek: [{
        isim: {},
        fiyat: {},
        içerik: { type: Array, default: undefined }
      }],
      icecek: {
        type: Array, default: undefined
      }
    }]

  },
  {
    collection: "Deneme",
    versionKey: false,
    default: undefined
  }
);


BilgiSchema.post("save", (doc) => {
  logger.info("Kaydedilen doküman - ", doc);
});

BilgiSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Güncellenen doküman - ", doc);
});

module.exports = mongoose.model("BilgiSchema", BilgiSchema);
