import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';


export default function ItemCount({ stock, initial, addCart }) {
    const [cantidad, setCantidad] = useState(initial);

return (
    <>
        <CardActions className='itemCount'>
            <button disabled={0 === cantidad} onClick={() => setCantidad(cantidad - 1)}>-</button>
            {cantidad}
            <button disabled={stock === cantidad} onClick={() => setCantidad(cantidad + 1)}>+</button>
        </CardActions>
        <CardActions className='itemCount'>
            <button onClick={() => {addCart(cantidad)}}> Agregar al carro</button>
        </CardActions>
    </>
)
};
