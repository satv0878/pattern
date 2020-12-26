import { Car } from './car'
export interface AbstractCarFactory {
    createCar(brand: string): Car
}
