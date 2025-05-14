import React from 'react';
import Counter from './Counter';

const A = ({ no, inc }) => {
    return (
        <>
            <h1>Counter-App A</h1>
            <h2>Count: {no}</h2>
            <button onClick={() => inc(WrappedA)}>+</button>
        </>
    );
};
let WrappedA = Counter(A);

export default A;
