import {useState, useEffect} from 'react'

import apiClient from "../utils/apiClient"

export default function Box({box, board}) {
    const [value, setValue] = useState("")

    const handleBoxClick = () => {
        apiClient.patchBoxById(board.id, box.id)
        .then((box) => {
            console.log("GOT THE BOX")
            setValue(box.value)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const style = {
        boxSizing: "border-box",
        height: "50px",
        width: "50px",
        border: "1px solid red",
        backgroundColor: "white",
        padding: "10px"
    }
    return (
    <div style={style} onClick={handleBoxClick}>{value}</div>
    )
}