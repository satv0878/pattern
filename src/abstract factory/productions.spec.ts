import { Car } from './car'
import { AudiRetailer, CarRetailer } from './productions'

describe('car factory', () => {
    //let factory: AudiFactory
    let retailer: CarRetailer
    beforeEach(() => {
        //factory = new AudiFactory()
        retailer = new AudiRetailer()
    })
    it('should create a car', () => {
        let car: Car = retailer.buyCar('offroad')
        expect(car.drive()).toBe('driving offroad')
    })
    it('should create a car', () => {
        let car: Car = retailer.buyCar('fast')
        expect(car.drive()).toBe('driving fast')
    })
})
