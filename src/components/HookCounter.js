import React, {useState} from 'react'

function HookCounter(){
     // useState() takes in the init values of the state props, returns a current state and method to set state
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Hook Counter</h3>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter