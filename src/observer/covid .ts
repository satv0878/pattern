/// subject: covid case number raise
/// observer 1: incidence calculator
/// observer 2: catgorization

export interface Subject {
    registerObserver(o: Observer)
    removeObserver(o: Observer)
    notifyObserver()
}

export interface Observer {
    update(covidCases: number)
}

export interface IncidenceCalculator {
    calculateIncidence(cases: number)
    getIncidence()
}
export interface AVGCalculator {
    calculateAverage(cases: number)
}

export class IncidenceGermany implements IncidenceCalculator, Observer {
    private inhabitants: number
    private incidence: number

    constructor(inhabitants: number) {
        this.inhabitants = inhabitants
    }

    update(covidCases: number) {
        this.calculateIncidence(covidCases)
    }

    calculateIncidence(covidCases: number) {
        this.incidence = (covidCases / this.inhabitants) * 100000
    }

    getIncidence(): number | null {
        return this.incidence ? this.incidence : null
    }
}

export class AverageGermany implements AVGCalculator, Observer {
    private inhabitants: number
    private average: number

    constructor(inhabitants: number) {
        this.inhabitants = inhabitants
    }

    update(covidCases: number) {
        this.calculateAverage(covidCases)
    }

    calculateAverage(covidCases: number) {
        this.average = covidCases / this.inhabitants
    }

    getAverage(): number | null {
        return this.average ? this.average : null
    }
}

export class CovidSubject implements Subject {
    observerList: Array<Observer>

    private covidCasesLast7Days: number

    constructor() {
        this.observerList = []
    }

    public registerObserver(o: Observer) {
        this.observerList.push(o)
    }

    public notifyObserver() {
        this.observerList.forEach((o) => {
            o.update(this.covidCasesLast7Days)
        })
    }

    public removeObserver(o: Observer) {
        const index = this.observerList.indexOf(o, 0)
        if (index > -1) this.observerList.splice(index, 1)
    }

    public setCovidCases(cases: number) {
        this.covidCasesLast7Days = cases
        this.covidNumbersChange()
    }
    private covidNumbersChange() {
        this.notifyObserver()
    }
}
