import React from 'react';

export default function ItemCount({onAdd, stock, initial}) {
//Numero (no puede superar stock disponible) viene por props del padre
//controles (si no hay mas stock el click no debe tener mas efecto/ si hay stock te deja seguir (onAdd (del padre)))

        return (
            <div>
                <button>-</button>
                {initial}
                <button onClick={onAdd()}>+</button>
            </div>
        )
}
