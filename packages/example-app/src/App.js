import React, { Component } from 'react';
import { JFrontHelloView } from 'example-lib';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>App.js</code> or <code>JFrontHelloView.js</code> and save to reload.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <JFrontHelloView>
            Content from app!!!
          </JFrontHelloView>
        </div>
      </div>
    );
  }
}

export default App;
