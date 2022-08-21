import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, toggle } from '../app/counterReducer/counterSlice';

const Counter = (props) => {
    const state = useSelector((state) => state);

    const { value, show } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h2>Counter App</h2>
            {show ? (
                <>
                    <p>{value}</p>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
                </>
            ) : (
                ''
            )}

            <button onClick={() => dispatch(toggle())}>toggle</button>
        </React.Fragment>
    );
};

export default Counter;
