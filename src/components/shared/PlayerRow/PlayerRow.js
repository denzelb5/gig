import React from 'react';
import playerShape from '../../../helpers/propz/instrumentRowShape';
import './PlayerRow.scss';

class PlayerRow extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="instrument">
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id={player.id}/>
    <label className="form-check-label" htmlFor={player.id}>{player.name}</label>
      </div>
      </div>
    );
  }
}

export default PlayerRow;
