import React from 'react';
import './App.css';
import componentWithLayout from './Layout';
import './ItemList.css';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchedUsers: null };
  }
  
  render() {
    return (
      <div className="App">
      <ItemList />
      </div>
      );
    }
    
  }
  
  export default componentWithLayout(App);