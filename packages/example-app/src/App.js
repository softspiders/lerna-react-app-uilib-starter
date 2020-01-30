import React, { Component } from 'react';
import { LibComponent } from 'example-lib';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>App.js</code> or <code>LibComponent.js</code> and save to reload.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <LibComponent>
            Content from app!!!
          </LibComponent>
        </div>
      </div>
    );
  }
}

export default App;
