import { AbstractCarFactory } from './abstractFactory'
import { Car } from './car'
import {
    AudiQuattro,
    AudiRS8,
    MercedesAMG,
    MercedesGClass,
} from './concreteProducts'

export class AudiFactory implements AbstractCarFactory {
    createCar(type: string): Car {
        if (type === 'fast') {
            return new AudiRS8()
        }
        if (type === 'offroad') {
            return new AudiQuattro()
        }
    }
}
export class MercedesFactory implements AbstractCarFactory {
    createCar(type: string): Car {
        if (type === 'fast') {
            return new MercedesAMG()
        }
        if (type === 'offroad') {
            return new MercedesGClass()
        }
    }
}
