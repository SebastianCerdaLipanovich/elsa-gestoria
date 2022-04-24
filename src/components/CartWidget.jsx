import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext'

export default function CartWidget() {

    let { cart } = useContext(CartContext);
    const [sum, setSum] = useState(Number(0))

    useEffect(() => {
        setSum(Number(0))
        cart.forEach(element => {
            setSum(s => s + element.cantidad)
        });
    }, [cart])


    return (
        <>
            {sum === 0 ?
                (<Link to="/cart"> 🛒</Link>)
                :
                (<Link to="/cart"> 🛒({sum})</Link>)
            }

        </>
    )
}
