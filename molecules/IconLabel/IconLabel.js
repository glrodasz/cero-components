import React from 'react'
import PropTypes from 'prop-types'

import styles from './IconLabel.module.css'
import withStyles from '../../hocs/withStyles'

import Icon from '../../atoms/Icon'
import Paragraph from '../../atoms/Paragraph'

import { options } from './constants'
import Spacer from '../../layout/Spacer'

const handleClick = ({ onClick }) => (event) => {
  onClick(event)
}

export const IconLabel = ({
  getStyles,
  icon,
  label,
  onClick,
  isClickable,
  direction,
  isActive,
}) => {
  return (
    <div
      className={getStyles('icon-label', {
        'is-clickable': isClickable || !!onClick,
        [`direction-${direction}`]: direction,
      })}
      onClick={onClick && handleClick({ onClick })}
    >
      <Icon
        name={icon}
        color={isActive ? 'primary' : 'base'}
        background={isActive ? 'highlight' : 'transparent'}
        size="sm"
      ></Icon>
      {direction === 'horizontal' && <Spacer.Horizontal size="xs" />}
      <Paragraph size="xs" color={isActive ? 'primary' : 'base'} isInline>
        {label}
      </Paragraph>
    </div>
  )
}

IconLabel.propTypes = {
  getStyles: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(options.icons).isRequired,
  label: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  isClickable: PropTypes.bool,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

IconLabel.defaultProps = {
  direction: 'vertical',
  isActive: false,
  getStyles: () => {},
  onClick: () => {},
}

export default withStyles(styles)(IconLabel)
