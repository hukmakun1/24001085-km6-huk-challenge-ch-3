// import mobilData from "./data/mobil.json" assert { type: "json" };

// class Mobil {
//   getAllMobil() {
//     return mobilData;
//   }

//   searchMobil(search) {
//     const searchedMobil = mobilData.filter((mobil) => {
//       if (mobil.availableAt > search.date) {
//         return false;
//       }
//       if (mobil.capacity <= search.capacity) {
//         return false;
//       }
//       return true;
//     });
//     console.log(searchedMobil);
//     return searchedMobil;
//   }
// }

// export default new Mobil();

const getMobil = async (searchedMobil) => {
  const res = await fetch(
    `/cars?availableAt=${searchedMobil.date}&capacity=${searchedMobil.capacity}`
  );
  const { data } = await res.json();
  return data;
};

const searchMobil = async (search) => {
  const searchedMobil = mobilData.filter((mobil) => {
    if (mobil.availableAt > search.date) {
      return false;
    }
    if (mobil.capacity <= search.capacity) {
      return false;
    }
    return true;
  });
  return searchedMobil;
};

export default { getMobil, searchMobil };
