import { AbstractCarFactory } from './abstractFactory'
import { Car } from './car'
import { Audi, Mercedes } from './concreteProducts'

export class CarFactory implements AbstractCarFactory {
    createCar(brand: string): Car {
        if (brand === 'audi') {
            return new Audi()
        }
        if (brand === 'mercedes') {
            return new Mercedes()
        }
    }
}
