// Muestra 1 item
import React from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Item({ onAdd, item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.pictureURL}
        alt={item.nombre}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          USD {item.precio}
        </Typography>
        <Link to={`/Servicios/${item.id}`}>Ver detalle</Link>
      </CardContent>
      
    </Card>
  );
}


