import { Car } from './car'
import { CarFactory } from './concreteFactory'
import { CarRetailer } from './productions'

describe('car factory', () => {
    let factory: CarFactory
    let retailer: CarRetailer
    beforeEach(() => {
        factory = new CarFactory()
        retailer = new CarRetailer(factory)
    })
    it('should create a car', () => {
        let car: Car = retailer.buyCar('audi')
        expect(car.drive()).toBe('driving fast')
    })
    it('should create a car', () => {
        let car: Car = retailer.buyCar('mercedes')
        expect(car.drive()).toBe('driving chic')
    })
})
