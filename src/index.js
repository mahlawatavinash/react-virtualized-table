import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import TableComponent from './TableComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
