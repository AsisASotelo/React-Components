import React from 'react';
import { useState } from 'react';
import useDocumentTitle from './useDocumentTitle'

function Counter(props) {
    const [count,setCount] = useState(0)
    const [name, setName] = useState('');

    useDocumentTitle(`${name} has clicked ${count} times.`);

    //ComponentDidMount
    //ComponentDidUpdate

    return (
        <>
        <input type='text' onChange={other  => setName(other.target.value)}/>
        <div>
            {`${name} has clicked this counter ${count} times.`}
        </div>
        <button onClick = {()=>{setCount(count+1)}}>INCREASE</button>

        </>
    );
}

export default Counter;