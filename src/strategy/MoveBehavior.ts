export interface MoveBehavior {
    move(): string
}

export class MoveOnRails implements MoveBehavior {
    move(): string {
        return 'i am a train'
    }
}
export class MoveOnRoad implements MoveBehavior {
    move(): string {
        return 'i am a car'
    }
}
export class MoveInAir implements MoveBehavior {
    move(): string {
        return 'i am an airplane'
    }
}
export class MoveOnWater implements MoveBehavior {
    move(): string {
        return 'i am a ship'
    }
}
