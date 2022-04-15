import React, {useState} from 'react';

export default function Cart() {

    const [cantidad, setCantidad] = useState(0);



    return (
        <>
            🛒({cantidad})
        </>
    )
}
