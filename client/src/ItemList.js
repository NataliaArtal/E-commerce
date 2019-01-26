import React from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTruck } from '@fortawesome/free-solid-svg-icons';



class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
            searchResult: null
         };
    }

    componentWillMount() {
        library.add(faSearch);
        library.add(faTruck);
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
                    <div className="boton"><FontAwesomeIcon onClick={this.handleSearchClick}  icon="search"/></div>
                    
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