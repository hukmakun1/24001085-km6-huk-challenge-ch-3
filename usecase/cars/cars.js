const carsRepo = require("../../repsitory/cars/cars");

exports.getCars = (manufacture, availableAt, capacity) => {
  const data = carsRepo.getCars(manufacture, availableAt, capacity);
  return data;
};

exports.getCar = (id) => {
  const data = carsRepo.getCar(id);
  return data;
};

exports.postCar = (payload) => {
  const data = carsRepo.postCar(payload);
  return data;
};

exports.putCar = (id, payload) => {
  const data = carsRepo.putCar(id, payload);
  return data;
};

exports.delCar = (id) => {
  const data = carsRepo.delCar(id);
  return data;
};
