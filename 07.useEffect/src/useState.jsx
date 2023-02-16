import { useState } from "react"

export const Mystate = () => {
    const [myName, setMyName] = useState("Guada")
    return (
    <>
        <h4>{myName}</h4>
            <input
            type="text"
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
        />
    </>)
}