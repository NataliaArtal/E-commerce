import React from 'react';
import './App.css';
import componentWithLayout from './Layout';
import './ItemList.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
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
    
    // componentDidMount() {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => this.setState({ fetchedUsers: json }));
    // }
  }
  
  export default componentWithLayout(App);