import { AbstractAudi, AbstractMercedes } from './abstractProducts'

export interface AbstractCarFactory {
    createMercedes(): AbstractMercedes
    createAudi(): AbstractAudi
}
