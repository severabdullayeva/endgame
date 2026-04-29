import { useState, useEffect } from "react";

const useTimer = (activeTurn, isPlaying) => {
    const [whiteTime, setWhiteTime] = useState(600);
    const [blackTime, setBlackTime] = useState(600);
    const [gameOver, setGameOver] = useState(false);
    

    
    console.log("TURN:", activeTurn);
    useEffect(() => {
        if (gameOver, isPlaying) return;

        const interval = setInterval(() => {
            setWhiteTime(t => {
                if (activeTurn === "w") return Math.max(t - 1, 0);
                return t;
            });

            setBlackTime(t => {
                if (activeTurn === "b") return Math.max(t - 1, 0);
                return t;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [activeTurn, gameOver]);

    useEffect(() => {
        if (whiteTime === 0 || blackTime === 0) {
            setGameOver(true);
        }
    }, [whiteTime, blackTime]);

    return { whiteTime, blackTime, gameOver, isPlaying };
};

export default useTimer;