import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'

export default function ItemDetail({ producto }) {
    const [mostrar, setMostrar] = useState(true);
    const addCart = (cantidad) => {
        console.log("se agregaron "+cantidad+" al carrito");
        setMostrar(false)
    }    

    return (
        <>
            <div className="itemDetail">
                <img src={producto.pictureURL} alt={producto.nombre} />
                <div>
                    <h4>{producto.nombre}</h4>
                    <h4>USD {producto.precio}</h4>
                    <p>{producto.descripcion}</p>
                    {mostrar ?
                        <ItemCount stock={producto.stock} initial={1} addCart={addCart} />:
                        <Link to="/cart"> Ir al carrito </Link>
                    }
                </div>
            </div>
        </>
    )
}