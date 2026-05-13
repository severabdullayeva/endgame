import { Chess } from 'chess.js'
import React from 'react'
import stylesBoard from './Board.module.css'

import { Chessboard } from "react-chessboard"

const Board = ({ position, makeMove }) => {

    const onDrop = (sourceSquare, targetSquare) => {
        return makeMove(sourceSquare, targetSquare)
    }


    return (
        <div className={stylesBoard.boardWrapper}>

            <Chessboard
                position={position}
                onPieceDrop={onDrop}
                customDarkSquareStyle={{
                    backgroundColor: "#111827"
                }}
                customLightSquareStyle={{
                    backgroundColor: "#e5e7eb"
                }}

                customBoardStyle={{
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(250, 204, 21, 0.2)"
                }}
            />

        </div>
    )
}

export default Board