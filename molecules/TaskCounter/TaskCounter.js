import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

import styles from './TaskCounter.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

const handleToggle = ({ onToggle, isCollapsed, setIsCollapsed }) => () => {
  setIsCollapsed(!isCollapsed)
  onToggle(!isCollapsed)
}

export const TaskCounter = ({
  title,
  children,
  current,
  total,
  isToggleable,
  onToggle,
  getStyles,
  defaultIsCollapsed,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultIsCollapsed)

  return (
    <div className={getStyles('task-counter')}>
      <div
        className={getStyles('container', { 'is-toggleable': isToggleable })}
        onClick={
          isToggleable &&
          handleToggle({ onToggle, isCollapsed, setIsCollapsed })
        }
      >
        {isToggleable && (
          <>
            <Icon
              color="inverted"
              size="sm"
              name={isCollapsed ? 'angleUp' : 'angleDown'}
              background="muted"
            />
            <Spacer.Horizontal size="sm" />
          </>
        )}
        <Paragraph weight="medium">{title}</Paragraph>
        <Paragraph weight="medium" isInline>
          {total ? `${current}/${total}` : current}
        </Paragraph>
      </div>
      <Spacer.Vertical size="xs" />
      <Divider />
      {!isCollapsed && children}
    </div>
  )
}

TaskCounter.propTypes = {
  title: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  current: PropTypes.number.isRequired,
  children: PropTypes.node,
  onToggle: PropTypes.func,
  isToggleable: PropTypes.bool,
  total: PropTypes.number,
  defaultIsCollapsed: PropTypes.bool,
}

TaskCounter.defaultProps = {
  getStyles: () => {},
  onToggle: () => {},
  current: 0,
  defaultIsCollapsed: true,
}

export default withStyles(styles)(TaskCounter)
