import React from 'react';
import './ItemCard.css';

const ItemCard = props => (
  <div className="container">
    <div className="card">
        <img className="foto" src={props.picture} alt="foto" />
        <span className="precio"> ${props.price} </span>  
        <div className="titulo">{props.title}</div>
        <span className="ubicacion">{props.location}</span>
    </div>
  </div>

);

export default ItemCard;
