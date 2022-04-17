const Bilgi = require("../models/UrunBilgileri");

const insert = (bilgiData) => {
  const yeniBilgi = new Bilgi(bilgiData);
  return yeniBilgi.save();
};
const update = (DuzenlenenBilgi) => {
  const guncelBilgi = {
    siparişler: DuzenlenenBilgi.siparişler,
    yemek: DuzenlenenBilgi.yemek,
    isim: DuzenlenenBilgi.isim,
    fiyat:DuzenlenenBilgi.fiyat,
    içerik:DuzenlenenBilgi.içerik
  };

  return Bilgi.findByIdAndUpdate(DuzenlenenBilgi.id, guncelBilgi);
};

const remove = (silinecekbilgi) => {
  return Bilgi.findByIdAndDelete(silinecekbilgi.id);
};

const list = () => {
  return Bilgi.find({});
};

module.exports = {
  insert,
  update,
  remove,
  list
};
