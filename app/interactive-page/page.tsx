'use client'

import { useState } from "react"

export default function InteractivePage() {
    const [count, setCount] = useState(0)
    return <div className="flex flex-col items-center justify-between p-24">
        <h2 className="text-xl">This is Interactive page</h2>
        <div className="flex flex-col justify-center mt-5">
            <button onClick={() => {
                setCount(count + 1)
            }} className="btn btn-neutral">{`Count is: ${count}`}</button>
        </div>
    </div>
}