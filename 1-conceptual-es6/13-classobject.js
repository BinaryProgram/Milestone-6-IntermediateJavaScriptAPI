// class is a blueprint to create object
class car{
    model = 'supra';
    brand = 'Toyota';
    
    show(){
        console.log("Hello from car class!");
    }
}

const privateCar = new car();
console.log(privateCar);
privateCar.show();

// using constructor
class vehicle{
    //   brand;
    //   type;
      constructor(vehicleBrand,vehicleType){
        this.brand = vehicleBrand;
        this.type = vehicleType;
      }

      truk(){
        console.log(`This is a ${this.type} from ${this.brand}`);
      }

}

const van = new vehicle('Tata','Truk');
van.truk();
console.log(van);