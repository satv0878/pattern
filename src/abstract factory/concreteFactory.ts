import { AbstractCarFactory } from './abstractFactory'
import { AbstractAudi, AbstractMercedes } from './abstractProducts'
import { Audi, Mercedes } from './concreteProducts'

export class CarFactory implements AbstractCarFactory {
    createMercedes(): AbstractMercedes {
        return new Mercedes()
    }

    createAudi(): AbstractAudi {
        return new Audi()
    }
}
