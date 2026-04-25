import React, { useEffect, useState } from 'react'

const Timer = ({onTimeUp}) => {
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval)

                    onTimeUp && onTimeUp()

                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)

    }, [])


    return (
        <div>
            <p>{timer}s</p>
        </div>
    )
}

export default Timer