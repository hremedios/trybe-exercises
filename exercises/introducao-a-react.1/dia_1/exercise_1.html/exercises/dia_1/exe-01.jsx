import React from 'react';
import './App.css';

const List = (props) => {
  return (
    <li key={props}>{props}</li>
    );
}

const manobras = ['Flip', '360Flip', 'Pop shove-it', 'Big spin'];

  class App extends React.Component {
    render() {
      return (
      <ul>{ manobras.map(manobras => List(manobras)) }</ul>
      );
    }
  }

export default App;