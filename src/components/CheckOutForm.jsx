import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext'

export default function CheckOutForm() {

    let { createOrder } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function terminarCompra() {

        if (name!=="" && email!=="" && phone!=="") {
            createOrder(name, email, phone);
        }
        else {
            alert("Faltan los datos del comprador")
        }

        /*
        let buyer ={
            buyer: { name, phone, email},
            items: [{id, title, price},{id, title, price}]
            total: 100
        }
        */
    }

    return (
        <>
            <div className='buyingForm'>
                <h2>Datos del comprador</h2>

                <input type={'text'}
                    value={name}
                    required={true}
                    placeholder="nombre"
                    onChange={(e) => {
                        setName(e.currentTarget.value);
                    }}
                />

                <br />

                <input type={'text'}
                    value={email}
                    placeholder="email"
                    required={true}
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                    }}
                />

                <br />

                <input type={'text'}
                    value={phone}
                    placeholder="telefono"
                    required={true}
                    onChange={(e) => {
                        setPhone(e.currentTarget.value);
                    }}
                />

                <br />
                <button onClick={() => terminarCompra()}>Comprar</button>
            </div>
        </>
    )
}