import React, { createContext, useState } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);


    function createOrder(name,email,phone){
        const order= {
            buyer:{
                name: name,
                email: email,
                phone: phone
            },
            items: cart.map(item => ({
                id: item.item.id,
                title: item.item.name,
                price: item.item.price,
                cantidad: item.cantidad
            })),
            total: total(),  
        };
        
        const db = getFirestore();

        const orderCollection = collection(db, "orders");


        addDoc(orderCollection,order).then(({id})=> alert('Tu orden es la numero: '+id))
    }

    function total(){
        let sum = 0;
        cart.forEach(element => {
            sum += element.cantidad * element.item.price;
        });
        return sum
    }

    function addToCart(item, cantidad) {
        if (isInCart(item.id)){
            let index = cart.findIndex(element => element.item.id === item.id)
            cart[index].cantidad = cart[index].cantidad + cantidad;
            setCart([...cart]);
            
        } else {
            setCart([...cart, {item, cantidad}])
            
        }
    };

    function isInCart(id){
        let result = cart.find(element => element.item.id === id);
        if (result === undefined){
            return false;
        }else{
            return true;
        }

    }
    function removeFromCart(item) {
        console.log(item)
        if(cart.length>1){
            console.log(cart)
            setCart(cart.filter(element => element.item.id !== item.id))
        }
        else{
            setCart([]);
        }
    }

    function clear() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clear, createOrder }}>
            {children}
        </CartContext.Provider>
    );
};



