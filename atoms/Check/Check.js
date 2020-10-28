import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './Check.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

const handleClick = ({ checked, setChecked, onClick }) => () => {
  setChecked(!checked)
  onClick(!checked)
}

export const Check = ({ styles, onClick }) => {
  const [checked, setChecked] = useState(false)

  if (checked) {
    return (
      <Icon
        name="checkCircle"
        color="muted"
        onClick={handleClick({ checked, setChecked, onClick })}
      />
    )
  }

  return (
    <span
      onClick={handleClick({ checked, setChecked, onClick })}
      className={styles('check')}
    />
  )
}

Check.propTypes = {
  styles: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(options.types),
}

Check.defaultProps = {
  styles: () => {},
  onClick: () => {},
}

export default withStyles(styles)(Check)
