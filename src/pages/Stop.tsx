import { useRef, useState } from "react"

export default function Stop() {
    const [elapsedTime, setElapsedTime] = useState<number>(0)
    const [isRunning, setIsRunning]= useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<number | null>(null)
    const startTimeRef = useRef(0)

    function startStopwatch() {
        setIsRunning(true)
        setIsPaused(false)
        startTimeRef.current = Date.now() - elapsedTime
        intervalRef.current = window.setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current)
        }, 10) // update every 10ms
    }

    function stopStopwatch() {
        setIsPaused(true)
        setIsRunning(false)
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    function resetStopwatch() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
        setElapsedTime(0)
        setIsRunning(false)
        setIsPaused(false)
    }

    const formateTime = (time: number) => {
        const minutes = Math.floor(time / 60000)
        const seconds = Math.floor((time % 60000)/1000)
        const milliseconds = Math.floor((time % 1000) / 10)

        return `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`
    }

    return (
        <main>
            <h1>Stop Watch</h1>
            <p>{formateTime(elapsedTime)}</p>
            <div>
                <button onClick={startStopwatch} disabled={isRunning}>{isPaused ? "Resume" : "Start"}</button>
                <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </main>
    )
}
