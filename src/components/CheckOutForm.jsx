import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext'

export default function CheckOutForm() {

    let { createOrder } = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function terminarCompra() {

        createOrder(name,email,phone);
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
            <div>
                <h2>Formulario de compra</h2>
                
                    <input type={'text'}
                        value={name}
                        placeholder="nombre"
                        onChange={(e) => {
                            setName(e.currentTarget.value);
                        }}
                    />
                
                <br />
                
                    <input type={'text'}
                        value={email}
                        placeholder="email"
                        onChange={(e) => {
                            setEmail(e.currentTarget.value);
                        }}
                    />
                
                <br />
                
                    <input type={'text'}
                        value={phone}
                        placeholder="telefono"
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