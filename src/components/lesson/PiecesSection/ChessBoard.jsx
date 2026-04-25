import React, { useState } from 'react'

import styles from './ChessBoard.module.css'

import { FaChessPawn, FaChessKnight, FaChessBishop, FaChessRook, FaChessQueen, FaChessKing } from "react-icons/fa";

// Şahmat taxtası üçün sütunlar
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

//şahmat taxtası üçün sətrlər (8-1) 
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

// Figurların icon mapping-i 

const icons = {
  pawn: <FaChessPawn />,
  knight: <FaChessKnight />,
  bishop: <FaChessBishop />,
  rook: <FaChessRook />,
  queen: <FaChessQueen />,
  king: <FaChessKing />
};

const createBoard = (piece) => {
  if (!piece) return {};
  return {
    [piece.position]: piece.type
  };
}



const ChessBoard = ({ piece }) => {

  const [activeSquare, setActiveSquare] = useState(null);

  const board = createBoard(piece)
  // console.log(board)

  return (
    <div className={styles.wrapperBoard}>

      {/* Sol tərəf sətr nömrələri */}
      <div className={styles.ranks}>
        {ranks.map(rank => (
          <div key={rank}>{rank}</div>
        ))}
      </div>

      <div className={styles.boardWithFiles}>

        {/*Şahmat taxtası (64)*/}
        <div className={styles.board}>
          {ranks.map((rank, rowIndex) => (

            // Hər sətr üçün sütunları yarat
            files.map((file, colIndex) => {

              // console.log({ rank, rowIndex, file, colIndex });

              // Kvadrat adı
              const square = file + rank;
              // console.log(square);

              const pieceName = board[square]
              // console.log(pieceName);


              // Rəng təyini
              const isDark = (rowIndex + colIndex) % 2 === 1;

              return (
                <div key={square}
                  onClick={() => setActiveSquare(square)}
                  // Kvadratın rəngi
                  className={`${styles.square}
            ${isDark ? styles.dark : styles.light}
            ${activeSquare === square ? styles.animate : ""}
            `}>

                  {pieceName && (
                    <div className={styles.piece}>
                      {icons[pieceName]}
                    </div>
                  )

                  }

                </div>
              )
            })
          ))}


        </div>
        {/* Altda sütun hərfləri (a-h) */}
        <div className={styles.files}>
          {files.map(file => (
            <div key={file}>{file}</div>
          ))}
        </div>
      </div>

    </div>
  )

}

export default ChessBoard