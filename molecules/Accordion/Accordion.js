import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

import styles from './Accordion.module.css'
import withStyles from '../../hocs/withStyles'

const handleToggle = ({ onToggle, isCollapsed, setIsCollapsed }) => () => {
  setIsCollapsed(!isCollapsed)
  onToggle(!isCollapsed)
}

export const Accordion = ({
  title,
  children,
  onToggle,
  getStyles,
  defaultIsCollapsed,
  addons,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultIsCollapsed)

  return (
    <div className={getStyles('accordion')}>
      <div
        className={getStyles('container')}
        onClick={handleToggle({ onToggle, isCollapsed, setIsCollapsed })}
      >
        <Icon
          color="inverted"
          size="sm"
          name={isCollapsed ? 'angleDown' : 'angleUp'}
          background="muted"
        />
        <Spacer.Horizontal size="sm" />
        {addons && addons.prepend}
        <Paragraph weight="medium">{title}</Paragraph>
        {addons && addons.append}
      </div>
      <Spacer.Vertical size="xs" />
      <Divider />
      {!isCollapsed && children}
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.node,
  onToggle: PropTypes.func,
  defaultIsCollapsed: PropTypes.bool,
  addons: PropTypes.shape({
    prepend: PropTypes.node,
    append: PropTypes.node,
  }),
}

Accordion.defaultProps = {
  getStyles: () => {},
  onToggle: () => {},
  current: 0,
  defaultIsCollapsed: true,
}

export default withStyles(styles)(Accordion)
