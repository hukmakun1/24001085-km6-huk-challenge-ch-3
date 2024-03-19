// import mobilData from "../../data/mobil.json" assert { type: "json" };

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

const getMobilData = async (date, capacity) => {
  const res = await fetch(`/cars?availableAt=${date}&capacity=${capacity}`);
  const { data } = await res.json();
  // console.log(data);
  return data;
};

// const searchMobil = async (search) => {
//   const data = await getMobil(search);
//   const searchedMobil = data.filter((mobil) => {
//     if (mobil.availableAt > search.date) {
//       return false;
//     }
//     if (mobil.capacity <= search.capacity) {
//       return false;
//     }
//     return true;
//   });
//   console.log(searchedMobil);
//   return searchedMobil;
// };

export default { getMobilData /* searchMobil */ };
