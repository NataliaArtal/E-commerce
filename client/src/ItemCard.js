import React from 'react';
import './ItemCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ItemCard = props => (
  <div className="container">
    <Link to={`/items/${props.id}`}>
      <div className="card">
        <div className="contenedor-foto"><img className="foto"  src={props.picture} alt="foto" /></div>
        <span className="precio">${props.price.amount}{props.price.decimals > 0 && (<sup>{props.price.decimals}</sup>)} </span>  
        <div className="free">{props.free_shipping && (<FontAwesomeIcon icon="truck"/>)}</div>
        <div className="titulo">{props.title}</div>
        <span className="ubicacion">{props.location}</span>
      </div>
    </Link>
  </div>

);

export default ItemCard;
