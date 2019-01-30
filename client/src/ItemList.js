import React from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import * as qs from 'query-string';



class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
            searchResult: null
         };
    }

    componentDidMount() {
        library.add(faTruck);
        
        let queryString = qs.parse(this.props.location.search)
        if (queryString && queryString.q && queryString.q !== "") {
            this.handleSearch(queryString.q);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            let queryString = qs.parse(this.props.location.search)
            if (queryString && queryString.q && queryString.q !== "") {
                this.handleSearch(queryString.q);
            }
        }
    }
    
   
    handleSearch = searchTerm => {
        axios.get('http://localhost:3001/api/items', {
            params: {
                q: searchTerm
            }
        })
        .then(response => this.setState({
            searchResult: response.data
        }));
    }
    
    render() {
        return (
            <div>
                <div className="item-list-breadcrumb">
                        {
                            this.state.searchResult &&  
                            <label key={this.state.searchResult.categories[0].id}>
                                {this.state.searchResult.categories[0].name}
                            </label>
                        }
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