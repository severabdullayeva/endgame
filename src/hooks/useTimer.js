import { useState, useEffect } from "react";

const useTimer = (activeTurn, isPlaying) => {
    const [whiteTime, setWhiteTime] = useState(600);
    const [blackTime, setBlackTime] = useState(600);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);


    const resetTimer = () => {
        setWhiteTime(600);
        setBlackTime(600);
        setGameOver(false);
        setWinner(null);
    }


    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const interval = setInterval(() => {
            if (activeTurn === "w") {
                setWhiteTime(prev => {
                    if (prev <= 1) {
                        setGameOver(true);
                        setWinner("black");
                        return 0;
                    }
                    return prev - 1;
                });
            } else {
                setBlackTime(prev => {
                    if (prev <= 1) {
                        setGameOver(true);
                        setWinner("white")
                        return 0;
                    }
                    return prev - 1;
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [activeTurn, isPlaying, gameOver]);

    return { whiteTime, blackTime, gameOver, winner, resetTimer };
};

export default useTimer;