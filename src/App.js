import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

import logo from './logo.svg';
import './App.css';

import Player from './components/Player';
import List from './components/List';
import model from './model/tracks';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model,
      track: false,
    };

    this.handlerChangeTrack = this.handlerChangeTrack.bind(this);
  }

  handlerChangeTrack(track) {
    console.log(track);
    this.setState({ track })
  }

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <h1 className="App-title">Player</h1>
        </header>
        <Player track={this.state.track}/>
        <List
          model={this.state.model}
          onChangeTrack={this.handlerChangeTrack}
        />
      </div>
    );
  }
}

export default App;
