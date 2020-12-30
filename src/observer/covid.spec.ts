import { AverageGermany, CovidSubject, IncidenceGermany } from './covid '
describe('oberver', () => {
    let incidenceGermany: IncidenceGermany
    let averageGermany: AverageGermany
    beforeEach(() => {
        incidenceGermany = new IncidenceGermany(80000000)
        averageGermany = new AverageGermany(80000000)
    })
    it('should return null when incidence cannot be calculated ', () => {
        expect(incidenceGermany.getIncidence()).toBe(null)
    })

    it('should register a new observer', () => {
        let subject = new CovidSubject()
        subject.registerObserver(incidenceGermany)
        subject.registerObserver(averageGermany)
        expect(subject.observerList.length).toBe(2)
    })
    it('should remove an observer', () => {
        let subject = new CovidSubject()
        subject.registerObserver(incidenceGermany)
        subject.registerObserver(averageGermany)
        subject.removeObserver(incidenceGermany)
        expect(subject.observerList.length).toBe(1)
    })
    it('should notify the observer', () => {
        let subject = new CovidSubject()
        subject.registerObserver(incidenceGermany)
        subject.registerObserver(averageGermany)

        subject.setCovidCases(20000 * 7)

        expect(incidenceGermany.getIncidence()).not.toBe(null)
        expect(incidenceGermany.getIncidence()).toBe(175)

        expect(averageGermany.getAverage()).not.toBe(null)
        expect(averageGermany.getAverage()).toBe(0.00175)
    })
})
