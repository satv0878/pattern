import { WalnutBread } from './Walnut'
describe('test template method pattern', () => {
    it('should ', () => {
        const walnut: WalnutBread = new WalnutBread()
        expect(walnut.makeBred()).toBe('You have 1325 grams of bread to eat')
    })
})
