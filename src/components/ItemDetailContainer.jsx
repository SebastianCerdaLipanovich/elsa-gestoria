import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { traerProducto } from '../utils/products'
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const {id} = useParams()
    const[producto, setProducto] = useState({})

    useEffect(() => {        
            traerProducto(id)
            .then((res) => setProducto(res))
            .catch((error) => console.log(error));
    }, [id])

    return (
        <>
            <div>
                <h2>Detalle</h2>
                <ItemDetail producto={producto}></ItemDetail>
            </div>
        </>
    )
}