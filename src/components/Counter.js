import {useState} from 'react';
import '../App.css';

const Counter = () => {

    const [count, setCount] = useState(0)

    // countに+1する処理
    const increment = () => {
    setCount(prevState => prevState +1)
    };

    // countに-1する処理
    const decrement = () => {
        setCount(prevState => prevState -1)
    };

    return (
        <dev className='counter-body'>
            <h2 className='count-num'>{count}</h2>
            <button className='plus' onClick={increment}>+</button>
            <button className='minus' onClick={decrement}>-</button>
        </dev>
    )
};

export default Counter 


