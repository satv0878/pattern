import { Car } from './car'

//concrete Products

export class AudiRS8 extends Car {
    drive() {
        return 'driving fast'
    }
}

export class AudiQuattro extends Car {
    drive() {
        return 'driving offroad'
    }
}
export class MercedesAMG extends Car {
    drive() {
        return 'driving chic and fast'
    }
}
export class MercedesGClass extends Car {
    drive() {
        return 'driving chic and dirty'
    }
}
