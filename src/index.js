import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import config from './config'
const akey = config.REACT_APP_KEY;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: akey };
    console.log(this.state);
  }
  render() {
    console.log(process.env.REACT_APP_KEY);
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

