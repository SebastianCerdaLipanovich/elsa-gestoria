// Muestra 1 item
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function CartItem({ item, cantidad }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.pictureURL}
        alt={item.nombre} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
          <br/>
          Cantidad: {cantidad}
        </Typography>
      </CardContent>
    </Card>
    
  );
}


