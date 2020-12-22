import { MoveInAir, MoveOnRails, MoveOnRoad, MoveOnWater } from './MoveBehavior'
import { Airplane, Car, Ship, Train, Vehicle } from './vehicle'

describe('test strategy pattern', () => {
    it('should return road behavior', () => {
        const car: Vehicle = new Car(new MoveOnRoad())
        expect(car.go()).toBe('i am a car')
    })

    it('should return air behavior ', () => {
        const airplane: Vehicle = new Airplane(new MoveInAir())
        expect(airplane.go()).toBe('i am an airplane')
    })
    it('should return water behavior', () => {
        const ship: Vehicle = new Ship(new MoveOnWater())
        expect(ship.go()).toBe('i am a ship')
    })
    it('should return rail behavior', () => {
        const train: Vehicle = new Train(new MoveOnRails())
        expect(train.go()).toBe('i am a train')
    })
    it('should return water behavior after behavior was changed dynamically', () => {
        const car: Vehicle = new Car(new MoveOnRoad())
        car.setMoveBehavior(new MoveOnWater())
        expect(car.go()).toBe('i am a ship')
    })
    it('should set the speed ', () => {
        const car: Vehicle = new Car(new MoveOnRoad())
        car.setMoveBehavior(new MoveOnWater())
        car.setMaxSpeed(80)
        expect(car.maxSpeed).toBe(80)
    })
})
