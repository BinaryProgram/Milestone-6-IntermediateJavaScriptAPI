class car {
  carBrand;
  carModel;
  constructor(brand, model) {
    this.carBrand = brand;
    this.carModel = model;
  }
  show() {
    console.log(`Car brand ${this.carBrand} and model ${this.carModel}`);
  }
}

class vehicle extends car {
  brand;
  type;
  constructor(vehicleBrand, vehicleType, carBrand, carModel) {
    // super is for car 
    super(carBrand, carModel);
    this.brand = vehicleBrand;
    this.type = vehicleType;
  }

  truk() {
    console.log(`This is a ${this.type} from ${this.brand}`);
  }
}

const vehicleClass = new vehicle("Tata", "Truk", "Toyota", "Supra");
vehicleClass.truk();
vehicleClass.show();
