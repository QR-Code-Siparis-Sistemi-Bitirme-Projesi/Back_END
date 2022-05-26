const mongoose = require("mongoose");
const logger = require("../scripts/logger/bilgilerLogger");

const KahvaltiSchema = new mongoose.Schema(
  {
    Urun:{type: String},
    Fiyat:{type: Object},
    İçindekiler:[{

    }],

  },
  {
    collection: "Kahvaltı", //Veri tabanında tablonun adı.
    versionKey: false,
    default: undefined
  }
);

const IceceklerSchema = new mongoose.Schema(
  {
    Urun:{type: String},
    Fiyat:{type: Object},

  },
  {
    collection: "icecekler", //Veri tabanında tablonun adı.
    versionKey: false,
    default: undefined
  }
);

const TekBagelSchema = new mongoose.Schema(
  {
    Urun:{type: String},
    Fiyat:{type: Object},

  },
  {
    collection: "Tek_Bagel", //Veri tabanında tablonun adı.
    versionKey: false,
    default: undefined
  }
);

const TatilarSchema = new mongoose.Schema(
  {
    Urun:{type: String},
    Fiyat:{type: Object},

  },
  {
    collection: "Tatlilar", //Veri tabanında tablonun adı.
    versionKey: false,
    default: undefined
  }
  );

  const SandviclerSchema = new mongoose.Schema(
    {
      Urun:{type: String},
      Fiyat:{type: Object},
      İçindekiler:[{
  
      }],
  
    },
    {
      collection: "Sandviçler", //Veri tabanında tablonun adı.
      versionKey: false,
      default: undefined
    }
  );
  
    const HaftaSonuOzelSchema = new mongoose.Schema(
      {
        Urun:{type: String},
        Fiyat:{type: Object},
    
      },
      {
        collection: "Hafta_Sonu_Ozel", //Veri tabanında tablonun adı.
        versionKey: false,
        default: undefined
      }
    );

  const EkstralarSchema = new mongoose.Schema(
    {
      Urun:{type: String},
      Fiyat:{type: Object},
  
    },
    {
      collection: "Ekstralar", //Veri tabanında tablonun adı.
      versionKey: false,
      default: undefined
    }
  );
  


KahvaltiSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

KahvaltiSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

IceceklerSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

IceceklerSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

TekBagelSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

TekBagelSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

TatilarSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

TatilarSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

SandviclerSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün:: ", doc);
});

SandviclerSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

HaftaSonuOzelSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

HaftaSonuOzelSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

EkstralarSchema.post("save", (doc) => {
  logger.info("Ürün başarıyla eklendi, eklenen ürün: ", doc);
});

EkstralarSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Başarıyla güncellendi, güncellenen: ", doc);
});

const kahvalti = mongoose.model("KahvaltiSchema",KahvaltiSchema);
const icecekler = mongoose.model("IceceklerSchema",IceceklerSchema);
const TekBagel = mongoose.model("TekBagelSchema",TekBagelSchema);
const Tatlilar = mongoose.model("TatilarSchema",TatilarSchema);
const Sandvicler = mongoose.model("SandviclerSchema",SandviclerSchema);
const HaftaSonuOzel = mongoose.model("HaftaSonuOzelSchema",HaftaSonuOzelSchema);
const Ekstralar = mongoose.model("EkstralarSchema",EkstralarSchema);
module.exports ={kahvalti,icecekler,TekBagel,Tatlilar,Sandvicler,HaftaSonuOzel,Ekstralar};