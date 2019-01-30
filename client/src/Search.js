import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import logo from './logo.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: ''
         };
    }

    componentWillMount() {
        library.add(faSearch);
        this.handleLogoOnClick()
    }
    
    handleOnChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    handleLogoOnClick = () => {
        if (this.state.searchTerm !== "") {
            this.setState({searchTerm:""})
        }
    }
    
    render() {
        return (
            <div>
                <div className="header"/>
                <Link to="/" onClick={this.handleLogoOnClick}><img src={logo} className="logo" alt="logo" /></Link>
                <div className="search">
                    <form>
                        <input className="input" placeholder="Nunca dejes de buscar" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    </form>
                    <Link  to={`/items?q=${this.state.searchTerm}`}>
                        <div className="boton"><FontAwesomeIcon icon="search"/></div>
                    </Link>
                </div>
            </div>
        );
    }
}
                    
export default Search;