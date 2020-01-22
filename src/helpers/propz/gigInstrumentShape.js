import PropTypes from 'prop-types';

const gigInstrumentShape = PropTypes.shape({
  id: PropTypes.string,
  instrumentId: PropTypes.string.isRequired,
  gigId: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
});

export default { gigInstrumentShape };
