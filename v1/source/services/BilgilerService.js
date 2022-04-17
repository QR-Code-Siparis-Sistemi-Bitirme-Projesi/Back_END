const Bilgi = require("../models/UrunBilgileri");

const insert = (bilgiData) => {
  const yeniBilgi = new Bilgi(bilgiData);
  return yeniBilgi.save();
};
const update = (DuzenlenenBilgi) => {   //Düzenlenmiş bilgi.
  const guncelBilgi = {
    siparişler: DuzenlenenBilgi.siparişler,
    yemek: DuzenlenenBilgi.yemek,
    isim: DuzenlenenBilgi.isim,
    fiyat:DuzenlenenBilgi.fiyat,
    içerik:DuzenlenenBilgi.içerik
  };

  return Bilgi.findByIdAndUpdate(DuzenlenenBilgi.id, guncelBilgi); //Id ile bilgiyi bulup düzenlenen ile değiştirme.
};

const remove = (silinecekbilgi) => {
  return Bilgi.findByIdAndDelete(silinecekbilgi.id); //Id ile bilgiyi bulup silme.
};

const list = () => {
  return Bilgi.find({}); //Bilgileri görüntüleme.
};

module.exports = {
  insert,
  update,
  remove,
  list
};
