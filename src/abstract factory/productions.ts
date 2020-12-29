import { Car } from './car'
import { AudiQuattro, AudiRS8 } from './concreteProducts'

//abstract creator  lass
export abstract class CarRetailer {
    protected abstract createCar(brand: string): Car

    buyCar(brand: string) {
        let car: Car

        car = this.createCar(brand) //createCar(brand)

        car.prepare()
        car.paint()
        car.clean()

        return car
    }
}

export class AudiRetailer extends CarRetailer {
    constructor() {
        super()
    }
    createCar(type: string) {
        if (type === 'fast') {
            return new AudiRS8()
        }
        if (type === 'offroad') {
            return new AudiQuattro()
        }
    }
}
