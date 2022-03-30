import React, { useState } from 'react';
import ItemCount from './ItemCount';
import HijoContainer from './HijoContainer';


export default function ItemListContainer() {
    
    let arrayDeProductos = ["Zapato", "remera","otra cosa"];

    function onAdd(cuanto){

    }
    const [stock, setStock] = useState(10);   
    const [initial, setInitial] = useState(0);     
    
    
    return (
        <>
        <HijoContainer arrayDeProductos={arrayDeProductos}/>
        
        <div>
           <ItemCount onAdd={onAdd} stock={stock} initial={initial}/>
        </div>
        </>
    )
}
