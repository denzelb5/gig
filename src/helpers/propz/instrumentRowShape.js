import PropTypes from 'prop-types';

const instrumentRowShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
});
export default { instrumentRowShape };
