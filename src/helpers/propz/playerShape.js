import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  instrumentId: PropTypes.string,
});

export default { playerShape };
