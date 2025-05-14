import React from 'react';
import Counter from './Counter';

const B = ({ no, inc }) => {
    return (
        <>
            <h1>Counter-App A</h1>
            <h2>Count: {no}</h2>
            <button onClick={() =>inc(WrappedB)}>+</button>
        </>

    );
};
let WrappedB = Counter(B);
export default B;
