import React, { useEffect, useState } from 'react';
import { traerProducto } from '../utils/products'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => setProducto(res))
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div>
                <h2>Detalle</h2>
                <ItemDetail producto={producto}></ItemDetail>
            </div>
        </>
    )
}