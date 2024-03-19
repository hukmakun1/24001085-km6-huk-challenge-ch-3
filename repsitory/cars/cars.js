const { v4: uuidv4 } = require("uuid");
const cars = require("../../data/mobil.json");

exports.getCars = (manufacture, availableAt, capacity) => {
  let data = cars.map((cars) => cars);

  data = data.filter((cars) => {
    let filtersedStatus = true;
    if (manufacture) {
      filtersedStatus =
        filtersedStatus &&
        cars.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
    }
    if (availableAt) {
      filtersedStatus =
        filtersedStatus &&
        cars.availableAt.toLowerCase().includes(availableAt?.toLowerCase());
    }
    if (capacity) {
      filtersedStatus = filtersedStatus && cars.capacity;
    }

    return filtersedStatus;
  });

  return data;
};

exports.getCar = (id) => {
  let data = cars.map((cars) => cars);

  data = data.filter((cars) => cars.id == id);
  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.postCar = (payload) => {
  // insert data cars (direfresh ilang)
  cars.push(payload);

  return payload;
};

exports.putCar = (id, payload) => {
  updatedCarsIndex = 0;
  // uptade data berdasarkan id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
      updatedCarsIndex = index;
    }
  });

  return cars[updatedCarsIndex];
};

exports.delCar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);

  return null;
};
