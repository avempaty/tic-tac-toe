import Box from './box'

export default function Board(props) {
    return (
        <div
            style={{
                display: "flex",
                boxSizing: "content-box",
                flexFlow: "row wrap",
                width: "150px",
                height: "150px",
                border: "1px solid black"
            }}
        >
            {props.board.boxes.map((box) => {
                return <Box box={box} board={props.board}/>
            })}
        </div>
    )
}