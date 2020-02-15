import React, {useState} from 'react'

function HookCounterTwo(){
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incFive = () => {
        for (let i=0; i<5; i++){ 
            // setCount(count + 1)            // not working
            setCount(prevCount => prevCount + 1) // safer way
        }
    }
    return (
        <div>
            <h3>Hook Counter 2</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo