import React, {Component} from 'react';
import {LibComponent} from 'example-lib';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>App.js</code> or <code>LibComponent.js</code> and save to reload.
        </p>
        <LibComponent>
          AppContent
        </LibComponent>
      </div>
    );
  }
}

export default App;
