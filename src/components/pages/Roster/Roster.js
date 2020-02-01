import React from 'react';
import { Link } from 'react-router-dom';
import PlayerRow from '../../shared/PlayerRow/PlayerRow';
// import playerData from '../../../helpers/data/playerData';
import gigPlayerData from '../../../helpers/data/gigPlayerData';
import smash from '../../../helpers/data/smash';
import './Roster.scss';

class Roster extends React.Component {
  state = {
    instruments: [],
    players: [],
  }

  getInstruments = () => {
    const { gigId } = this.props.match.params;
    smash.getInstrumentPlayersForRoster(gigId)
      .then((instruments) => this.setState({ instruments }))
      .catch((error) => console.error(error));
  }

  handlePlayerCheckboxes = (event) => {
    const { players } = this.state;
    const newPlayers = [...players];
    const playersIndex = players.findIndex((x) => x.id === event.target.id);
    newPlayers[playersIndex].isChecked = event.target.checked;
    this.setState({ players });
  }


  // getPlayerCheckboxData = () => {
  //   const { gigId } = this.props.match.params;
  //   smash.getInstrumentPlayersForGigId(gigId)
  //     .then((result) => {
  //       console.log('result', result);
  //       const playersArr = result;
  //       const newPlayers = [];
  //       Object.keys(playersArr).forEach((fbId) => {
  //         const { players } = playersArr[fbId];
  //         Object.keys(players).forEach((player) => {
  //           console.log('player2', player);
  //           // eslint-disable-next-line no-param-reassign
  //           players[player].isChecked = false;
  //         });
  //         newPlayers.push(players);
  //       });
  //       console.error('newPlayers', newPlayers);
  //       this.setState({ players: newPlayers });
  //     })
  //     .catch((error) => console.error(error));
  // }

  saveHiredPlayers = (gigId) => {
    const { players } = this.state;
    const myPlayers = players.filter((x) => x.isChecked);
    if (myPlayers.length) {
      myPlayers.forEach((player) => {
        const newHiredPlayer = {
          playerId: player.id,
          gigId,
        };
        gigPlayerData.addGigInstrument(newHiredPlayer)
          .then()
          .catch((error) => console.error(error));
      });
    }
  }

  componentDidMount() {
    this.getInstruments();
    // this.getPlayerCheckboxData();
  }

  render() {
    const { gigId } = this.props.match.params;
    const { instruments } = this.state;
    const { playerCheckboxes } = this.state;

    const printRoster = () => instruments.map((instrument) => (
      <div>
        <h1>{instrument.name}</h1>
        <h2>Number: {instrument.number}</h2>
        {instrument.players.map((player) => <PlayerRow key={player.id} player={player} playerCheckboxes={playerCheckboxes} handlePlayerCheckboxes={this.handlePlayerCheckboxes} />)}
      </div>
    ));

    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      <Link className="btn btn-success" to={`/gig/:${gigId}`}>View Gig</Link>
      {printRoster()}
      {/* {this.state.instrumentNames.map((instrument) => <InstrumentMenu key={instrument.id} instrument={instrument} />)} */}
      </div>
    );
  }
}

export default Roster;
