import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from '../components/CartContext'


export default function ItemDetail({ producto }) {

    let { addToCart } = useContext(CartContext);

    return (
        <>
            <div className="itemDetail">
                <img src={producto.pictureURL} alt={producto.nombre} />
                <div>
                    <h4>{producto.nombre}</h4>
                    <h4>USD {producto.precio}</h4>
                    <p>{producto.descripcion}</p>
                    <ItemCount producto={producto} initial={1} addToCart={addToCart}  />
                </div>
            </div>
        </>
    )
}