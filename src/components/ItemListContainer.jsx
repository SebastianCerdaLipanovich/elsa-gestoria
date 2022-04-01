//Este tiene la logica

import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';



export default function ItemListContainer() {


    function onAdd() {

    }

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        const pago = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ id: 1, nombre: "Formulario DS160", precio: 50, pictureURL:"https://solicitarmivisa.com/wp-content/uploads/2019/10/ds-160-confirmation-1200x823.png"}, { id: 2, nombre: "Adelantar Turno CAS", precio: 100, pictureURL:"https://www.infoviajera.com/wp-content/uploads/2021/09/renovacion-Visa-Estados-Unidos-USA-1-min.jpg"}]);
                //reject(null)
            }, 2000)
        })

        pago
            .then((res) => {
                console.log("Salio exitoso")
                setItemList(res)
            })
            .catch((err) => {
                console.log("salio por error" + err)
            })
            .finally(() => {
                console.log("termino la promesa")
            })

    }, [])


    return (
        <>
            <br />
            <div className='itemListContainer'>
            <ItemList onAdd={onAdd} itemList={itemList} />
            </div>
            <br />
        </>
    )
}
