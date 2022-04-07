import React from "react";

export default function ItemDetail({ producto }) {
    return (
        <>
            <div className="itemDetail">
                <img src={producto.pictureURL} alt={producto.nombre} />
                <div>
                    <h4>{producto.nombre}</h4>
                    <h4>USD {producto.precio}</h4>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </>
    )
}