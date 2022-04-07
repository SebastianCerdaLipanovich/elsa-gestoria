//Este tiene la logica

import React, { useEffect, useState } from 'react';
import { traerProductos } from '../utils/products'
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';



export default function ItemListContainer() {

    function onAdd() {

    }

    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        traerProductos()
            .then((res) => setItemList(res))
            .catch((error) => console.log(error))
            .finally(()=>{
                setLoading(false);
            })
    }, []);

    return (
        <>
            <h2 className='itemListTitle'>Servicios</h2>
            {loading ? (
                <div className='itemListContainer'>
                    <h3>Cargando servicios, espera por favor!</h3>
                </div>
            ) : (
                <>

                    <div className='itemListContainer'>
                        <ItemList onAdd={onAdd} itemList={itemList} />
                    </div>
                    <br />
                    <ItemDetailContainer />
                    <br />
                </>
            )}
        </>
    )
}
