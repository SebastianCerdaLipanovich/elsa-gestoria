import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'
import CartItem from './CartItem';


export default function CartListContainer() {

    let { cart, clear } = useContext(CartContext);

    return (
        <>
            <div>
                <h2>Detalle</h2>

                <button onClick={() => clear()}>Borrar Todos</button>
                <br />
                <div className='container'>
                    {cart.map(element => <CartItem key={element.item.id} item={element.item} cantidad={element.cantidad} />)}
                </div>
            </div>
        </>
    )
}