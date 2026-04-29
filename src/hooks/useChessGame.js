import { useState, useRef } from "react";
import { Chess } from "chess.js";

const useChessGame = () => {
    const gameRef = useRef(new Chess());

    const [fen, setFen] = useState(gameRef.current.fen());
    const [history, setHistory] = useState([]);

    const updateState = () => {
        setFen(gameRef.current.fen());
        setHistory(gameRef.current.history());
    };

    const makeMove = (from, to) => {
        const move = gameRef.current.move({
            from,
            to,
            promotion: "q",
        });

        if (!move) return false;

        updateState();
        return true;
    };

    const undoMove = () => {
        gameRef.current.undo();
        updateState();
    };

    const resetGame = () => {
        gameRef.current = new Chess();
        updateState();
    };

    return {
        position: fen,
        history,

        makeMove,
        undoMove,
        resetGame,

        currentTurn: gameRef.current.turn(),
        isCheckmate: gameRef.current.in_checkmate(),
        isDraw: gameRef.current.in_draw(),
        isStalemate: gameRef.current.in_stalemate(),
        isCheck: gameRef.current.in_check(),
    };
};

export default useChessGame;