import React, {useState} from 'react'

function HookCounterTwo(){
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <h3>Hook Counter 2</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo