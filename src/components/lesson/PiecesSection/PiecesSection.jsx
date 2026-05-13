import React, { useState } from 'react'

import styles from './PiecesSection.module.css'
import PieceCard from './PieceCard';

import chessBishop from "../../../assets/homeImg/hero/bishop.png"
import chessKing from "../../../assets/homeImg/hero/king.png"
import chessKnight from "../../../assets/homeImg/hero/knight.png"
import chessPawn from "../../../assets/homeImg/hero/pawn.png"
import chessQueen from "../../../assets/homeImg/hero/queen.png"
import chessRook from "../../../assets/homeImg/hero/rook.png"

import pawnImg from '../../../assets/lesson/pieceCard/pawn_chess_movements.gif'
import bishopImg from '../../../assets/lesson/pieceCard/bishop_chess_movements.gif'
import kingImg from '../../../assets/lesson/pieceCard/king_chess_movements.gif'
import knightImg from '../../../assets/lesson/pieceCard/knight_chess_movements.gif'
import queenImg from '../../../assets/lesson/pieceCard/queen_chess_movements.gif'
import rookImg from '../../../assets/lesson/pieceCard/rook_chess_movements.gif'



const PiecesSection = () => {

    const pieces = [
        {
            title: "Pawn",
            img: chessPawn,
            chess: { type: "pawn", position: "e2" },
            description: "1 square forward (first move 2 squares), captures diagonally",
            gif: pawnImg
        },
        {
            title: "Knight",
            img: chessKnight,
            chess: { type: "knight", position: "g1" },
            description: "Moves in L shape (2+1 squares), can jump over pieces",
            gif: knightImg
        },
        {
            title: "Bishop",
            img: chessBishop,
            chess: { type: "bishop", position: "c1" },
            description: "Moves diagonally any number of squares",
            gif: bishopImg
        },
        {
            title: "Queen",
            img: chessQueen,
            chess: { type: "queen", position: "d1" },
            description: "Moves any direction (vertical, horizontal, diagonal)",
            gif: queenImg
        },
        {
            title: "King",
            img: chessKing,
            chess: { type: "king", position: "e1" },
            description: "Moves 1 square in any direction",
            gif: kingImg
        },
        {
            title: "Rook",
            img: chessRook,
            chess: { type: "rook", position: "a1" },
            description: "Moves horizontally or vertically any number of squares",
            gif: rookImg
        },
    ];
    return (
        <div className={styles.piecesSection}>
            <div className={styles.pieceTitle}>
                <h1>Chess Pieces & How They Move</h1>
                <p>Click on each piece to explore its movement and tactics</p>
            </div>
            <div className={styles.gridContainer}>
                {pieces.map((piece) => (
                    <div key={piece.title}>
                        <div className={styles.pieceCenter}>
                            <PieceCard
                                title={piece.title}
                                img={piece.img}
                                description={piece.description}
                                chess={piece.chess}
                                gif={piece.gif}

                            />
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default PiecesSection