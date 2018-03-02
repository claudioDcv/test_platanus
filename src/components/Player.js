import React from 'react';
import model from '../model/tracks';


class Player extends React.Component {
  render () {
    const { track } = this.props;
    return track ? (
      <div>
        <h1>Tema Actual</h1>
        <h2>{track.track.name}</h2>
        --------
      </div>
    ): <div><h1>No se ha seleccionado tema</h1></div>;
  };
}


export default Player;
