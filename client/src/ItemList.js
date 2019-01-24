import React from 'react';
import ItemCard from './ItemCard';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
            searchResult: null
         };
    }
    
    handleOnChange = event => {
        this.setState({ searchTerm: event.target.value });
    };
    
    handleSearchClick = () => {
        axios.get('http://localhost:3001/api/items', {
            params: {
                q: this.state.searchTerm
            }
        })
        .then(response => this.setState({
            searchResult: response.data
        }));
    }
    
    render() {
        return (
            <div>
                <div className="search">
                    <form>
                        <input className="input" placeholder="Nunca dejes de buscar" onChange={this.handleOnChange}/>
                    </form>
                    <button onClick={this.handleSearchClick} className="boton">Buscar</button>
                </div>
                <div>
                    {
                        this.state.searchResult && this.state.searchResult.items.map(item => <ItemCard  key={item.id} {...item}/>)
                    }
                </div>
            </div>
        );
    }
}
                    
export default ItemList;