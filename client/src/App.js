import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './ItemList.css';
import ItemList from './ItemList';
import DetailsProduct from './DetailsProduct';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchedUsers: null };
  }
  
  render() {
    return (
      <div className="App">
        {/* <Search/> */}
        <Route path="/" component={Search} />
        <Route path="/items" exact component={ItemList}/>
        <Route path="/items/:id" component={DetailsProduct}/>
      </div>
      );
    }
    
  }
  
  
  export default App;

 