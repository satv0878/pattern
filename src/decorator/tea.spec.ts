import { MilkDecorator, Mint, SugarDecorator, Tea } from './tea'

describe('tea decorator', () => {
    it('should create and add milk and its cost', () => {
        let mintTea: Tea = new Mint()

        let sugarTea = new SugarDecorator(mintTea)
        expect(sugarTea.cost()).toBe(1.45 + 1.98)
        let milkTea = new MilkDecorator(sugarTea)
        expect(milkTea.cost()).toBe(1.45 + 1.98 + 0.98)
    })
})
