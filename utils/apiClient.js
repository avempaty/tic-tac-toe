import SimpleApiClient, { StatusCodeError } from "simple-api-client"

class ApiClient extends SimpleApiClient {
    //Default localhost
    constructor() {
        super("http://localhost:3000")
    }
    createTicTacToe() {
        return this.post("/boards", 201)
    }
    
    patchBoxById(boardId, boxId) {
        return this.patch(`/boards/${boardId}/box/${boxId}`, 200)
    }
}

export default new ApiClient()