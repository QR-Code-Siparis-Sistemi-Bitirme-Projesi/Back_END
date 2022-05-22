const Bilgi = require("../models/UrunBilgileri");

const MenuAl = () => {
  const Kahvaltı = Kahvaltı.find({});
  const icecekler = icecekler.find({});
  const Tek_Bagel = Tek_Bagel.find({});
  const Tatlilar = Tatlilar.find({});
  const Sandviçler = Sandviçler.find({});
  const Hafta_Sonu_Ozel = Hafta_Sonu_Ozel.find({});
  const Ekstralar = Ekstralar.find({});



  const menuObj = {

    kahvaltiObj: Kahvaltı,
    
    icecekObj: icecekler,
    
    bagelObj: Tek_Bagel,

    tatliObj: Tatlilar,

    sanvicObj: Sandviçler,

    haftaSonuObj: Hafta_Sonu_Ozel,

    ekstraObj: Ekstralar,

  }
};

const update = (DuzenlenenBilgi) => {   //Düzenlenmiş bilgi.
  const guncelBilgi = {
    siparişler: DuzenlenenBilgi.siparişler,
    yemek: DuzenlenenBilgi.yemek,
    isim: DuzenlenenBilgi.isim,
    fiyat:DuzenlenenBilgi.fiyat,
    içerik:DuzenlenenBilgi.içerik,
    icecek:DuzenlenenBilgi.icecek,
    tatli:DuzenlenenBilgi.tatli
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
  MenuAl,
  update,
  remove,
  list
};
