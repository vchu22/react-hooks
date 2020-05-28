import React, {useState} from 'react'

function HookCounterThree(){
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <h3>Hook Counter 3</h3>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
            
            <p>Your first name is - {name.firstName}</p>
            <p>Your last name is - {name.lastName}</p>
        </form>
    )
}

export default HookCounterThree