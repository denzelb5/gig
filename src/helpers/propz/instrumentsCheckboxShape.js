import PropTypes from 'prop-types';

const instrumentsCheckboxShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
});
export default { instrumentsCheckboxShape };
