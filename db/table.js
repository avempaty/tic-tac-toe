/*
Table template schema to represent DB
Use case purpose for in-memory storage 
*/
export default class Table {
    constructor(name) {
        this.name = name
        this.boards = new Map()
    }

    create(data) {
        throw new Error("not implemented")
    }
    update(data) {
        throw new Error("not implemented")
    }
    delete(id) {
        throw new Error("not implemented")
    }
    get(id) {
        throw new Error("not implemented")
    }

} 