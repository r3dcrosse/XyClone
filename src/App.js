import React, { Component } from 'react';
require("./basic.less");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>XyCLONE</h2>
        </div>
        <p className="App-intro">
          TRY ME: make a change somewhere and save. Webpack should hot reload your page
        </p>
      </div>
    );
  }
}

export default App;
