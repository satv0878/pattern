export class Database {
    private static instance: Database
    private constructor() {}

    public static getInstance(): Database {
        if (this.instance == null) {
            this.instance = new Database()
        }
        return this.instance
    }
}
