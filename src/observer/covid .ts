/// subject: covid case number raise
/// observer 1: incidence calculator
/// observer 2: catgorization

interface Subject {
    registerObserver(o: Observer)

    removeObserver(o: Observer)
    notifyObserver()
}

interface Observer {
    update()
}

class CovidSubject implements Subject {
    observerList: Array<Observer>

    registerObserver(o: Observer) {
        this.observerList.push(o)
    }

    notifyObserver() {
        this.observerList.forEach((o) => {
            o.update()
        })
    }

    removeObserver(o: Observer) {
        const index = this.observerList.indexOf(o, 0)
        if (index > -1) this.observerList.splice(index, 1)
    }

    covidNumbersChange() {
        this.notifyObserver()
    }
}
