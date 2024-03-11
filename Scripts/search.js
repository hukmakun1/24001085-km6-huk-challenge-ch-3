import mobilData from "./data/mobil.json" assert { type: "json" };

class Mobil {
  getAllMobil() {
    return mobilData;
  }

  searchMobil(search) {
    const searchedMobil = mobilData.filter(
      (mobil) =>
        mobil.available || mobil.year || mobil.availableAt || mobil.capacity
    );
    return searchedMobil;
  }
}

export default new Mobil();
