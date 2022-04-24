import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from '../components/CartContext'


export default function ItemDetail({ producto }) {

    let { addToCart } = useContext(CartContext);

    return (
        <>
            <div className="itemDetail">
                <img src={producto.img} alt={producto.name} />
                <div>
                    <h4>{producto.name}</h4>
                    <h4>USD {producto.price}</h4>
                    <p>{producto.description}</p>
                    <ItemCount producto={producto} initial={1} addToCart={addToCart}  />
                </div>
            </div>
        </>
    )
}