import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';

export default function ItemCount({ onAdd, stock, initial }) {
    //Numero (no puede superar stock disponible) viene por props del padre
    //controles (si no hay mas stock el click no debe tener mas efecto/ si hay stock te deja seguir (onAdd (del padre)))

    const [cantidad, setCantidad] = useState(initial);



    return (
        <>
            <CardActions className='itemCount'>
                <button disabled={0 === cantidad} onClick={() => setCantidad(cantidad - 1)}>-</button>
                {cantidad}
                <button disabled={stock === cantidad} onClick={() => setCantidad(cantidad + 1)}>+</button>
            </CardActions>
            <CardActions className='itemCount'>
            <button onClick={() => onAdd(cantidad)}>Agregar al carro</button>
            </CardActions>
        </>
    )
}
