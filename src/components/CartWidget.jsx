import React, {useState} from 'react';

export default function CartWidget() {

    const [cantidad, setCantidad] = useState(0);



    return (
        <>
            🛒({cantidad})
        </>
    )
}
