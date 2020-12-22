import { MoveBehavior } from './MoveBehavior'

export class Vehicle {
    constructor(mb: MoveBehavior) {
        this.moveBehavior = mb
    }

    private moveBehavior: MoveBehavior
    public maxSpeed: number

    go() {
        console.log(this.moveBehavior.move())
    }

    public setMoveBehavior(mb: MoveBehavior) {
        this.moveBehavior = mb
    }

    public setMaxSpeed(speed: number) {
        this.maxSpeed == speed
    }
}

export class Car extends Vehicle {}
export class Airplane extends Vehicle {}
export class Train extends Vehicle {}
export class Ship extends Vehicle {}
