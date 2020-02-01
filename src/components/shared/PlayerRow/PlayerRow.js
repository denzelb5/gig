import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../../helpers/propz/instrumentRowShape';
import './PlayerRow.scss';

class PlayerRow extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    handlePlayerCheckboxes: PropTypes.func,
  }

  render() {
    const { player, handlePlayerCheckboxes } = this.props;
    return (
      <div className="instrument">
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" onChange={handlePlayerCheckboxes} id={player.id}/>
    <label className="form-check-label" htmlFor={player.id}>{player.name}</label>
      </div>
      </div>
    );
  }
}

export default PlayerRow;
