import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { id } = useParams()
    const [producto, setProducto] = useState({})



    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "servicios", id);
        getDoc(itemRef).then((res) => {
            const objetoJunto = { id: res.id, ...res.data() }
            setProducto(objetoJunto)
        })
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