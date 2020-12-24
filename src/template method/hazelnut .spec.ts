import { HazelnutBread } from './hazelnut'
describe('test template method pattern', () => {
    it('should ', () => {
        const hazelnut: HazelnutBread = new HazelnutBread()
        expect(hazelnut.makeBred()).toBe('You have 1015 grams of bread to eat')
    })
})
