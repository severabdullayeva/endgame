import React, { useState } from "react";
 import useChessGame from "../../hooks/useChessGame";
import useTimer from "../../hooks/useTimer";

const StartPlay = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const {
        position,
        makeMove,
        currentTurn,
        resetGame
    } = useChessGame();

    //  
    const { whiteTime, blackTime, gameOver } =
        useTimer(currentTurn, isPlaying);

    return (
        <div>
            {/* Start button */}
            {!isPlaying && (
                <button onClick={() => setIsPlaying(true)}>
                    Start Game
                </button>
            )}

            {/* Timer */}
            <p>White: {whiteTime}</p>
            <p>Black: {blackTime}</p>

            {/* Board */}
            {isPlaying && (
                <Chessboard
                    position={position}
                    onPieceDrop={makeMove}
                />
            )}
        </div>
    );
};

export default StartPlay;