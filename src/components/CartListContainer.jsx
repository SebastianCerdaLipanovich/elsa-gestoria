import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartTableRow from '../components/CartTableRow'
import CheckOutForm from './CheckOutForm';


export default function CartListContainer() {

    let { cart, clear, removeFromCart } = useContext(CartContext);
   
    function subtotal(cart) {
        let sum = 0;
        cart.forEach(element => {
            sum += element.cantidad * element.item.price;
        });
        return sum
    }
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }



    return (
        <>
            <div>

                {cart.length === 0 ?
                    (
                        <div>
                            <h3>No hay items en tu carrito</h3>
                            <h3><Link to="/">Better back home</Link></h3>
                        </div>
                    )
                    :
                    (
                        <>
                            <h2>Detalle</h2>
                            <br />
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Descripcion</TableCell>
                                            <TableCell align="right">Cantidad</TableCell>
                                            <TableCell align="right">Precio Unitario</TableCell>
                                            <TableCell align="right">Precio</TableCell>
                                            <TableCell align="right">Borrar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.map((item) => (
                                            <CartTableRow key={item.item.id} item={item} removeFromCart={removeFromCart} />
                                        ))}
                                        <TableRow>
                                            <TableCell rowSpan={3} />
                                            <TableCell colSpan={2} align="right">Total</TableCell>
                                            <TableCell align="right">{ccyFormat(subtotal(cart))} USD</TableCell>
                                            <TableCell align="right"><button onClick={() => clear()}>Borrar Todos</button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <CheckOutForm/>
                        </>
                    )
                }
            </div>
        </>
    )
}