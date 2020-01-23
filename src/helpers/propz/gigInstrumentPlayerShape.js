import PropTypes from 'prop-types';

const gigInstrumentPlayerShape = PropTypes.shape({
  id: PropTypes.string,
  gigInstrumentId: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired,
  isYes: PropTypes.bool,
  isNo: PropTypes.bool,
});

export default { gigInstrumentPlayerShape };
