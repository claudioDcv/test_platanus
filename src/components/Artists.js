import React from 'react';
import Item from './Item';
import { ListGroup, ListGroupItem } from 'reactstrap';


class Artists extends React.Component {
  render () {
    const { artists } = this.props;

    return (
      <ListGroup>
        {artists.map((e, k) => (
          <ListGroupItem key={k}>{e.name}</ListGroupItem>
        ))}
      </ListGroup>
    );
  };
}


export default Artists;
