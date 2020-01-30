import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InstrumentMenu from '../../shared/InstrumentMenu/InstrumentMenu';
import instrumentData from '../../../helpers/data/instrumentData';
import playerData from '../../../helpers/data/playerData';

import PlayerRow from '../../shared/PlayerRow/PlayerRow';
import './Roster.scss';

class Roster extends React.Component {
  static propTypes = {
    handleCheckboxes: PropTypes.func,
  }

  state = {
    players: [],
    instrumentNames: [],
  }

  getInstruments = () => {
    instrumentData.getAllInstruments()
      .then((instrumentNames) => this.setState({ instrumentNames }))
      .catch((error) => console.error(error));
  }

  getPlayers = () => {
    playerData.getAllPlayers()
      .then((players) => this.setState({ players }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getPlayers();
    this.getInstruments();
  }

  render() {
    const { gigId } = this.props.match.params;
    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      <Link className="btn btn-success" to={`/gig/:${gigId}`}>View Gig</Link>
      {this.state.players.map((player) => <PlayerRow key={player.id} player={player} />)}
      {this.state.instrumentNames.map((instrument) => <InstrumentMenu key={instrument.id} instrument={instrument} />)}
      </div>
    );
  }
}

export default Roster;
