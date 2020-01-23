import React from 'react';
import { Link } from 'react-router-dom';
import instrumentData from '../../../helpers/data/instrumentData';
import playerData from '../../../helpers/data/playerData';
import InstrumentRow from '../../shared/InstrumentRow/InstrumentRow';
import PlayerRow from '../../shared/PlayerRow/PlayerRow';
import './Roster.scss';

class Roster extends React.Component {
  state = {
    instruments: [],
    players: [],
  }

  getInstruments = () => {
    instrumentData.getAllInstruments()
      .then((instruments) => this.setState({ instruments }))
      .catch((error) => console.error(error));
  }

  getPlayers = () => {
    playerData.getAllPlayers()
      .then((players) => this.setState({ players }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getInstruments();
    this.getPlayers();
  }

  render() {
    const { gigId } = this.props.match.params;
    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      <Link className="btn btn-success" to={`/gig/:${gigId}`}>View Gig</Link>
      {this.state.instruments.map((instrument) => <InstrumentRow key={instrument.id} instrument={instrument} />)}
      {this.state.players.map((player) => <PlayerRow key={player.id} player={player} />)}
      </div>
    );
  }
}

export default Roster;
