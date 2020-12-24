import { Database } from "./database";
describe('test singleton pattern', () => {
    it('should return road behavior', () => {

        
        let db: Database = Database.getInstance()
        
        // cant be called since constructor is private 
        //db = new Database()
        expect(db).toBeDefined
    })