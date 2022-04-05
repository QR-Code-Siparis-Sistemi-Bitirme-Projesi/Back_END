//mongoose modelindeki nesneyi db ye yazacak

const Bilgi = require("../models/Bilgi")

const insert = (bilgiData) => {
  const yeniBilgi = new Bilgi(bilgiData);
  return yeniBilgi.save();
}
const Degistir = (DuzenlenenBilgi) => {
  const yenidüzenlibilgi = {
    bilgiMetni: DuzenlenenBilgi.bilgiMetni,
    yapilanYorumlar: DuzenlenenBilgi.yapilanYorumlar,
    begeniler: DuzenlenenBilgi.begeniler
  }
  return Bilgi.findByIdAndUpdate(DuzenlenenBilgi._id, yenidüzenlibilgi)
};

const remove = (silinecekbilgi) => {
  return Bilgi.findByIdAndDelete(silinecekbilgi.id)
};

module.exports = {
  insert,
  Degistir,
  remove
}