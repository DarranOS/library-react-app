import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  isDisabled: false,
  version: 'primary',
  type: 'button',
}

Button.propTypes = {
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Button
