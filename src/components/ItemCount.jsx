import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom'


export default function ItemCount({ producto, initial, addToCart }) {
    const [mostrar, setMostrar] = useState(true);
    const [cantidad, setCantidad] = useState(initial);


    return (
        <>
            {mostrar ?
                <div>
                    <CardActions className='itemCount'>
                        <button disabled={0 === cantidad} onClick={() => setCantidad(cantidad - 1)}>-</button>
                        {cantidad}
                        <button disabled={producto.stock === cantidad} onClick={() => setCantidad(cantidad + 1)}>+</button>
                    </CardActions>
                    <CardActions className='itemCount'>
                        <button onClick={() => { addToCart(producto, cantidad); setMostrar(false) }}> Agregar al carro</button>
                    </CardActions>
                </div> 
                :
                <div>
                    <Link to="/cart"> Ir al carrito</Link>
                </div>
            }
        </>
    )
}

