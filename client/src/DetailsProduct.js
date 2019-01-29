import React from 'react';
// import * as qs from 'query-string';
import axios from 'axios';
import './DetailsProduct.css';



class DetailsProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            productId: '',
            data: null
         };
    }

    componentWillMount() {
        let id = this.props.match.params.id
        if (id !== "") {
            this.getItem(id); 
        }
    }

    getItem = productId => {
        axios.get(`http://localhost:3001/api/items/${productId}`)
        .then(response => this.setState({
            data: response.data
        }))
    }

    render() {
        console.log(this.state.data)
        if (!this.state.data) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="main-container">
                    <div className="details-breadcrumb">
                        <ul className="breadcrumb">
                           {
                               this.state.data.categories && this.state.data.categories.map(category => <li className="breadcrumb-1" key={category.id}>{category.name}</li>)
                           }
                        </ul>
                    </div>
                    <div className="container">
                           <div className="picture">
                                <img className="pic" alt="foto" src={this.state.data.item.picture}></img>
                           </div>
                           <div className="price-details">
                                <span className="condition-sold">{this.state.data.item.condition}-{this.state.data.item.sold_quantity}</span>
                                <span className="title">{this.state.data.item.title}</span>
                                <span className="price">${this.state.data.item.price.amount}{this.state.data.item.price.decimals > 0 && (<sup>{this.state.data.item.price.decimals}</sup>)}</span>
                                <a href='https://www.mercadolibre.com.ar/' className="boton1" >Comprar</a>
                           </div>
                           <div className="description">
                                <h3>Descripción del producto</h3>
                                <span className="description-parrafo">{this.state.data.item.description}</span>
                           </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default DetailsProduct;

           