import styles from "./Board.module.css"

import { Chessboard } from "react-chessboard";

const Board = ({ position, makeMove, onPieceDragBegin = () => console.log("DAŞI TUTDUM!") }) => {
    return (
        <div className={styles.wrapper}>
            <Chessboard
                id="basicBoard"
                position={position}
                onPieceDrop={makeMove}
              
                // Xana rənglərini burdan dəyişirik
                customDarkSquareStyle={{ backgroundColor: "#475569" }} // Slate-600
                customLightSquareStyle={{ backgroundColor: "#cbd5e1" }} // Slate-300
                // Daşların altına düşən kölgə və ya gediş effektləri üçün:
                customBoardStyle={{
                    borderRadius: "4px",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)"
                }}
            />
        </div>
    );
};

export default Board;