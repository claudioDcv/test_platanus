import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import model from '../model/tracks';
import Artists from './Artists';


class Item extends React.Component {
  render () {
    const { track, onChangeTrack } = this.props;
    return (
      <div className="col-md-4">
        <Card>
          <CardImg top width="100%" src={track.track.album.images[0].url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{track.track.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={() => { onChangeTrack(track) }}>Play</Button>
            <Artists artists={track.track.artists} />
          </CardBody>
        </Card>
      </div>
    );
  };
}


export default Item;
