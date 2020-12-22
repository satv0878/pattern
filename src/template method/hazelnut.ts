import { BreadMaker } from './bake'

export class HazelnutBread extends BreadMaker {
    addNuts(): number {
        return 300
    }
    addFlour(): number {
        return 500
    }

    addSalt(): number {
        return 10
    }
}
