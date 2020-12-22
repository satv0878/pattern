export abstract class BreadMaker {
    public makeBred() {
        this.mixEverything()
        this.bake()

        return `You have ${
            this.addYeast() +
            this.addWater() +
            this.addFlour() +
            this.addNuts() +
            this.addSalt()
        } grams of bread to eat`
    }

    abstract addFlour()
    abstract addSalt()
    abstract addNuts()

    private addYeast(): number {
        return 5
    }
    private addWater(): number {
        return 200
    }

    private mixEverything(): string {
        return 'mix ingredients'
    }
    private bake(): string {
        return 'bake in oven'
    }
}
