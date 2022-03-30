import React, { useState } from 'react';

export default function HijoContainer({ arrayDeProductos}) {

    const [x, setX] = useState(0);      
    
    return (
        <div>
            Productos: {JSON.stringify(arrayDeProductos)}
            <br/>
            Valor de x : {x}
            <br/>
            <button onClick={() => { 
            setX(x+1);
            }}>cambiar valor de X</button>             
        </div>
    )
}
