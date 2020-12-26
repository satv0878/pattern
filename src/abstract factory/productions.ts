import { AbstractCarFactory } from './abstractFactory'
import { Car } from './car'

export class CarRetailer {
    factory: AbstractCarFactory

    constructor(factory: AbstractCarFactory) {
        this.factory = factory
    }

    buyCar(brand: string) {
        let car: Car

        car = this.factory.createCar(brand)

        car.prepare()
        car.paint()
        car.clean()

        return car
    }
}
