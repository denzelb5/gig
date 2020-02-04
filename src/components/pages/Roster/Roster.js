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
        <div className="card col-3 personnel-card">
            <div key={instrument.id} className="personnel-card-header">
              {instrument.name}: Players Needed: {instrument.number}
            </div>
            <div className="card-body checkbox-div">
              {instrument.players.map((player) => printCheckbox(player))}
            </div>
        </div>
    ));

    return (
      <div className="roster">
        <h1 className="roster-headline">Select Needed Personnel:</h1>
        <div className="container">
          <div className="roster-cards-div row">
            {printRoster()}
          </div>
        </div>
        <Link className="btn btn-secondary roster-button" to={`/gig/${gigId}`}>View Final Gig Sheet</Link>
      </div>
    );
  }
}

export default Roster;
