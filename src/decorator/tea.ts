export abstract class Tea {
    abstract cost()
}

export class Mint extends Tea {
    cost() {
        return 1.45
    }
}

abstract class CondimentsDecorator extends Tea {}

export class MilkDecorator extends CondimentsDecorator {
    tea: Tea
    constructor(tea: Tea) {
        super()
        this.tea = tea
    }

    cost() {
        return this.tea.cost() + 0.98
    }
}
export class SugarDecorator extends CondimentsDecorator {
    tea: Tea
    constructor(tea: Tea) {
        super()
        this.tea = tea
    }

    cost() {
        return this.tea.cost() + 1.98
    }
}
