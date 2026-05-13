import React from 'react'

import stylesSidebar from './GameSidebar.module.css'

import stylesButton from '../../button/Button.module.css'

const GameSidebar = ({ game, timer, onRestart }) => {




    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className={stylesSidebar.sidebarChild}>
            <div className={stylesSidebar.infoBox}>
                <div className={stylesSidebar.icon}>♟</div>
                <h4>Chess Panel</h4>
                <p>Start the game to track moves & timers</p>
            </div>
            <div className={stylesSidebar.stickyTop}>
                <div className={stylesSidebar.turnBox}>
                    <p className={stylesSidebar.turnText}>
                        Turn: {game.currentTurn === "w"
                            ? "White's turn to move"
                            : "Black's turn to move"}
                    </p>
                </div>

                <div className={stylesSidebar.sectionTimer}>
                    <p>White: {formatTime(timer.whiteTime)}</p>
                    <p>Black: {formatTime(timer.blackTime)}</p>
                </div>
            </div>
            <ul className={stylesSidebar.table}>
                {game.history.map((move, index) => {
                    if (index % 2 === 0) {
                        const moveNumber = Math.floor(index / 2) + 1;
                        const blackMove = game.history[index + 1];

                        return (
                            <li key={index} className={stylesSidebar.row}>
                                <span className={stylesSidebar.moveNumber}>{moveNumber}.</span>
                                <span className={stylesSidebar.whiteMove}>{move}</span>
                                <span className={stylesSidebar.blackMove}>
                                    {blackMove ? blackMove : "-"}
                                </span>
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>

            {timer.gameOver && (
                <p className={stylesSidebar.winner}>
                    Winner: {timer.winner === "white" ? "White wins!" : "Black wins!"}
                </p>
            )

            }

            <div className={stylesSidebar.btnBox}>
                <button className={stylesButton.btn} onClick={onRestart}>
                    Restart Game
                </button>
            </div>

        </div>
    )
}

export default GameSidebar;