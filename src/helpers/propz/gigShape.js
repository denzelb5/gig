import PropTypes from 'prop-types';

const gigShape = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  concertDate: PropTypes.string.isRequired,
  concertTime: PropTypes.string.isRequired,
  concertLocation: PropTypes.string.isRequired,
  concertDress: PropTypes.string.isRequired,
  basePayTotal: PropTypes.number.isRequired,
  rehearsalDate: PropTypes.string.isRequired,
  rehearsalTime: PropTypes.string.isRequired,
  rehearsalLocation: PropTypes.string.isRequired,
  contractorEmail: PropTypes.string.isRequired,
  contractorPhone: PropTypes.string.isRequired,
  reportoire: PropTypes.string.isRequired,
  isOutside: PropTypes.string.isRequired,
});
export default { gigShape };
