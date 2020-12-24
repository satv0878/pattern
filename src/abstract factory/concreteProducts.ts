import { AbstractAudi, AbstractMercedes } from './abstractProducts'

export class Audi implements AbstractAudi {
    drive() {
        return 'driving fast'
    }
}
export class Mercedes implements AbstractMercedes {
    drive() {
        return 'driving chic'
    }
}
