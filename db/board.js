import Table from "./table"
import {v4} from "uuid"
import BaseError from "baseerr"

class BoardsTable extends Table {
    constructor() {
        super('boards')
    }
    /*
    {
        id: string,
        boxes: [] of box
    }
    */

    create() {
        const id = v4()
        const board = {
            id: id,
            boxes: [],
            player1: true
        }
        //add Box[] into board
        for(let i = 0; i < 9; i++) {
            board.boxes.push(createBox(i))
        }
        this.boards.set(board.id, board)
        return board
    }
    getById(id) {
        return this.boards.get(id)
    }
    removeById(id) {
        return this.boards.delete(id)
    }
    updateBoxById(boardId, boxId) {
        var board = this.boards.get(boardId)
        if(!board) throw new BaseError("board not found", {status: 404})
        var box = board.boxes.find((box) => box.id === Number.parseInt(boxId))
        if(!box) throw new BaseError("box not found", {status: 404})
        if(box.value) throw new BaseError("Box already taken by player", {status: 404})
        if(board.player1) { box.value = 'x' }
        else { box.value = 'o'}
        board.player1 = !board.player1
        return box
    }
}

function createBox(id) {
    const box = {
        id: id,
        value: null
    }
    return box
}
//Singleton, only need one instance
export default new BoardsTable()


