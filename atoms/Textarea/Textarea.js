import React from 'react'
import PropTypes from 'prop-types'

import styles from './Textarea.module.css'
import withStyles from '../../hocs/withStyles'

const DEFAULT_TEXTAREA_ROWS = 5

import handleChange from '../../handlers/handleChange'

export const Textarea = ({
  children,
  rows,
  placeholder,
  onChange,
  getStyles,
}) => {
  return (
    <textarea
      className={getStyles('textarea')}
      rows={rows}
      placeholder={placeholder}
      onChange={handleChange({ onChange })}
    >
      {children}
    </textarea>
  )
}

Textarea.propTypes = {
  children: PropTypes.node,
  getStyles: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  getStyles: () => {},
  onChange: () => {},
  rows: DEFAULT_TEXTAREA_ROWS,
}

export default withStyles(styles)(Textarea)
