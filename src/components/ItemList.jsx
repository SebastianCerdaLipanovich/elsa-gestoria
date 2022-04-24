//Este es el que muestra

import React from "react";
import Item from "./Item";

export default function ItemList({ itemList }) {

    return (
        <>
            {itemList.map(item => <Item key={item.id} item={item} />)}
        </>
    )

}

