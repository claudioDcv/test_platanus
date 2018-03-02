import React from 'react';
import Item from './Item';


class List extends React.Component {
  render () {
    const { model , onChangeTrack } = this.props;

    return (
      <div className="row">{model.items.map((e, k) => (
        <Item
          key={k}
          track={e}
          onChangeTrack={onChangeTrack}
        />
      ))}</div>
    );
  };
}


export default List;
