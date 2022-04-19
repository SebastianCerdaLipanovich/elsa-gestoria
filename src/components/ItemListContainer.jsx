//Este tiene la logica

import React, { useEffect, useState } from 'react';
import { traerProductos } from '../utils/products'
import CircularIndeterminate from './CircularIndeterminate';
import ItemList from './ItemList';




export default function ItemListContainer() {

    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        traerProductos()
            .then((res) => setItemList(res))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            <h2 className='itemListTitle'>Servicios</h2>
            {loading ? (
                <div className='itemListContainerLoader'>
                    <h3>Cargando servicios, espera por favor!</h3>
                    <br />
                    <div>
                        <CircularIndeterminate />
                    </div>
                </div>

            ) : (
                <>

                    <div className='itemListContainer'>
                        <ItemList itemList={itemList} />
                    </div>
                    <br />
                </>
            )}
        </>
    )
}
