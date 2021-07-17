import React from 'react'
import PropTypes from 'prop-types'

import { Bertical, Vertical } from './components'

import styles from './Spacer.module.css'
import { mapSize } from './helpers'
import withStyles from '../../hocs/withStyles'

export const Spacer = ({ getStyles, size, isPlayground }) => (
  <div
    className={getStyles('spacer', {
      'is-playground': isPlayground,
    })}
    style={{
      display: 'inline-block',
      width: mapSize(size),
      height: mapSize(size),
    }}
  />
)

Spacer.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getStyles: PropTypes.func.isRequired,
  isPlayground: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'none',
  isPlayground: false,
  getStyles: () => {},
}

const SpacerWithStyles = withStyles(styles)(Spacer)

SpacerWithStyles.Bertical = Bertical
SpacerWithStyles.Vertical = Vertical

export default SpacerWithStyles
