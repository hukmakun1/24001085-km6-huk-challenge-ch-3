const carsUsecase = require("../usecase/cars/cars.js");

exports.getCars = (req, res) => {
  const { manufacture, availableAt, capacity } = req.query;

  //   memanggil usecase
  const data = carsUsecase.getCars(manufacture, availableAt, capacity);

  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.getCar = (req, res) => {
  const { id } = req.params;

  const data = carsUsecase.getCar(id);
  if (!data) {
    return res.status(404).json({
      data: null,
      message: "cars with id ${id} is not found",
    });
  }
  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.postCar = (req, res) => {
  // Validasi data
  const {
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;
  if (!id || id == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi id!",
    });
  }
  if (!plate || plate == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi plate!",
    });
  }
  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi manufacture!",
    });
  }
  if (!model || model == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi model!",
    });
  }
  if (!image || image == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi image!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi rentPerDay!",
    });
  }
  if (!capacity || capacity == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi capacity!",
    });
  }
  if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi description!",
    });
  }
  if (!availableAt || availableAt == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi availableAt!",
    });
  }
  if (!transmission || transmission == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi transmission!",
    });
  }
  if (!available || available == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi available!",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi type!",
    });
  }
  if (!year || year == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi year!",
    });
  }
  if (!options || options == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi options! (Bentuk Array)",
    });
  }
  if (!specs || specs == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi specs! (Bentuk Array",
    });
  }

  const data = carsUsecase.postCar(req.body);

  res.status(201).json({
    data,
    message: null,
  });
};

exports.putCar = (req, res) => {
  const {
    // id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  // validasi data
  // if (!id || id == "") {
  //   return res.status(400).json({
  //     data: null,
  //     message: "Silakan isi id!",
  //   });
  // }
  if (!plate || plate == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi plate!",
    });
  }
  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi manufacture!",
    });
  }
  if (!model || model == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi model!",
    });
  }
  if (!image || image == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi image!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi rentPerDay!",
    });
  }
  if (!capacity || capacity == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi capacity!",
    });
  }
  if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi description!",
    });
  }
  if (!availableAt || availableAt == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi availableAt!",
    });
  }
  if (!transmission || transmission == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi transmission!",
    });
  }
  if (!available || available == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi available!",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi type!",
    });
  }
  if (!year || year == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi year!",
    });
  }
  if (!options || options == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi options! (Bentuk Array)",
    });
  }
  if (!specs || specs == "") {
    return res.status(400).json({
      data: null,
      message: "Silakan isi specs! (Bentuk Array)",
    });
  }

  const id = req?.params?.id;
  const uptadedCars = {
    id: id,
    ...req.body,
  };

  const data = carsUsecase.putCar(id, uptadedCars);

  res.status(200).json({
    data: uptadedCars,
    message: "Update Berhasil",
  });
};

exports.delCar = (req, res) => {
  const id = req?.params?.id;

  const data = carsUsecase.delCar(id);

  res.status(200).json({
    data,
    message: "Success",
  });
};
