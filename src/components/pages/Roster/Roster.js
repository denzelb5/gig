import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import InstrumentMenu from '../../shared/InstrumentMenu/InstrumentMenu';
import PlayerRow from '../../shared/PlayerRow/PlayerRow';

import smash from '../../../helpers/data/smash';
import './Roster.scss';

class Roster extends React.Component {
  static propTypes = {
    handleCheckboxes: PropTypes.func,
  }

  state = {
    instruments: [],
  }

  getInstruments = () => {
    const { gigId } = this.props.match.params;
    smash.getInstrumentPlayersForRoster(gigId)
      .then((instruments) => this.setState({ instruments }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getInstruments();
  }

  render() {
    const { gigId } = this.props.match.params;
    const { instruments } = this.state;
    const printRoster = () => instruments.map((instrument) => (
      <div>
        <h1>{instrument.name}</h1>
        <h2>Number: {instrument.number}</h2>
        {instrument.players.map((player) => <PlayerRow key={player.id} player={player} />)}
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
