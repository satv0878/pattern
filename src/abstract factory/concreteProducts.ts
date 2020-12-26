import { Car } from './car'

export class Audi extends Car {
    drive() {
        return 'driving fast'
    }
}
export class Mercedes extends Car {
    drive() {
        return 'driving chic'
    }
}
