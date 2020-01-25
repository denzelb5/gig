import React from 'react';
import { Link } from 'react-router-dom';

import playerData from '../../../helpers/data/playerData';

import PlayerRow from '../../shared/PlayerRow/PlayerRow';
import './Roster.scss';

class Roster extends React.Component {
  state = {
    players: [],
  }


  getPlayers = () => {
    playerData.getAllPlayers()
      .then((players) => this.setState({ players }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    const { gigId } = this.props.match.params;
    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      <Link className="btn btn-success" to={`/gig/:${gigId}`}>View Gig</Link>
      {this.state.players.map((player) => <PlayerRow key={player.id} player={player} />)}
      </div>
    );
  }
}

export default Roster;
