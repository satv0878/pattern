import { BreadMaker } from './bake'

export class WalnutBread extends BreadMaker {
    addNuts(): number {
        return 400
    }
    addFlour(): number {
        return 700
    }

    addSalt(): number {
        return 20
    }
}
