import React from 'react'

import stylesButton from '../../button/Button.module.css'

const StartGame = ({ onStart }) => {
    return (
        
        <button className={stylesButton.btn} onClick={onStart}>
            Start Game
        </button>
    )
}

export default StartGame