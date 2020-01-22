import React from 'react';
import { Link } from 'react-router-dom';
import instrumentData from '../../../helpers/data/instrumentData';
import InstrumentRow from '../../shared/InstrumentRow/InstrumentRow';
import './Roster.scss';

class Roster extends React.Component {
  state = {
    instruments: [],
  }

  getInstruments = () => {
    instrumentData.getAllInstruments()
      .then((instruments) => this.setState({ instruments }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getInstruments();
  }

  render() {
    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      {this.state.instruments.map((instruments) => <InstrumentRow key={instruments.id} instruments={instruments} />)}
      </div>
    );
  }
}

export default Roster;
