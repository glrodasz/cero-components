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
  children,
  current,
  total,
  isToggleable,
  onToggle,
  getStyles,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className={getStyles('task-counter')}>
      <div className={getStyles('container')}>
        {isToggleable && (
          <>
            <Icon
              color="inverted"
              size="sm"
              name={isCollapsed ? 'angleUp' : 'angleDown'}
              background="fulfilled"
              isClickable
              onClick={handleToggle({ onToggle, isCollapsed, setIsCollapsed })}
            />
            <Spacer.Vertical size="xs" />
          </>
        )}
        <Paragraph weight="medium">{children}</Paragraph>
        <Paragraph weight="medium" isInline>
          {total ? `${current}/${total}` : current}
        </Paragraph>
      </div>
      <Spacer.Horizontal size="xs" />
      <Divider />
    </div>
  )
}

TaskCounter.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  current: PropTypes.number.isRequired,
  onToggle: PropTypes.func,
  isToggleable: PropTypes.bool,
  total: PropTypes.number,
}

TaskCounter.defaultProps = {
  getStyles: () => {},
  current: 0,
}

export default withStyles(styles)(TaskCounter)
