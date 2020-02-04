import React from 'react';
import { Link } from 'react-router-dom';
import gigPlayerData from '../../../helpers/data/gigPlayerData';
import smash from '../../../helpers/data/smash';
import './Roster.scss';

class Roster extends React.Component {
  state = {
    instruments: [],
  }

  getInstruments = () => {
    const { gigId } = this.props.match.params;
    smash.getInstrumentPlayersForRoster(gigId)
      .then((instruments) => this.setState({ instruments }))
      .catch((error) => console.error(error));
  }

  handlePlayerCheckboxes = (event) => {
    const { gigId } = this.props.match.params;
    const checkbox = event.target;
    if (checkbox.checked) {
      const newHiredPlayer = {
        playerId: checkbox.id,
        gigId,
      };
      gigPlayerData.addGigPlayer(newHiredPlayer)
        .then(() => this.getInstruments())
        .catch((err) => console.error('error with add gigplayer', err));
    } else {
      const gigPlayerId = checkbox.dataset.gigplayerid;
      gigPlayerData.deleteGigPlayer(gigPlayerId)
        .then(() => this.getInstruments())
        .catch((err) => console.error('error with delete gigplayer', err));
    }
  }

  componentDidMount() {
    this.getInstruments();
  }

  render() {
    const { gigId } = this.props.match.params;
    const { instruments } = this.state;

    const printCheckbox = (player) => (
      <div key={`checkbox-${player.id}`} className="form-group form-check">
        <input type="checkbox" className="form-check-input" onChange={this.handlePlayerCheckboxes} id={player.id} data-gigplayerid={player.gigPlayerId} checked={player.gigPlayerId === 'none' ? false : true}/>
        <label className="form-check-label" htmlFor={player.id}>{player.name}</label>
      </div>
    );

    const printRoster = () => instruments.map((instrument) => (
      <div key={instrument.id}>
        <h1>{instrument.name}</h1>
        <h2>Number: {instrument.number}</h2>
        {instrument.players.map((player) => printCheckbox(player))}
      </div>
    ));

    return (
      <div className="roster">
        <Link className="btn btn-success" to={`/gig/${gigId}`}>View Gig</Link>
        {printRoster()}
      </div>
    );
  }
}

export default Roster;
