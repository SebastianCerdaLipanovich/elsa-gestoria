import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export default function CartTableRow({ item, removeFromCart }) {

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    return (
        <>
            {item.item ?
                <TableRow key={item.item.id}>
                    <TableCell>{item.item.name}</TableCell>
                    <TableCell align="right">{item.cantidad}</TableCell>
                    <TableCell align="right">{ccyFormat(item.item.price)} USD</TableCell>
                    <TableCell align="right">{ccyFormat(item.item.price * item.cantidad)} USD</TableCell>
                    <TableCell align="right"><button onClick={() => removeFromCart(item.item)}>Borrar</button></TableCell>
                </TableRow>
                :
                <>
                </>
            }

        </>
    )
}