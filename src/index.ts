import { MoveInAir, MoveOnRoad, MoveOnWater } from './strategy/MoveBehavior'
import { Airplane, Car, Ship, Vehicle } from './strategy/vehicle'

const car: Vehicle = new Car(new MoveOnRoad())

car.go()
car.setMoveBehavior(new MoveInAir())
car.go()

const airplane: Vehicle = new Airplane(new MoveInAir())
airplane.go()

const ship: Vehicle = new Ship(new MoveOnWater())
ship.go()
