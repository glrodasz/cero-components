import React from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Divider from '../../atoms/Divider'
import Spacer from '../../layout/Spacer'
import Accordion from '../Accordion'

import styles from './TaskCounter.module.css'
import withStyles from '../../hocs/withStyles'

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
  if (isToggleable) {
    return (
      <Accordion
        title={title}
        addons={{
          append: (
            <Paragraph weight="medium" isInline>
              {total ? `${current}/${total}` : current}
            </Paragraph>
          ),
        }}
        onToggle={onToggle}
        defaultIsCollapsed={defaultIsCollapsed}
      >
        {children}
      </Accordion>
    )
  }

  return (
    <div className={getStyles('task-counter')}>
      <div className={getStyles('container')}>
        <Paragraph weight="medium">{title}</Paragraph>
        <Paragraph weight="medium" isInline>
          {total ? `${current}/${total}` : current}
        </Paragraph>
      </div>
      <Spacer.Vertical size="xs" />
      <Divider />
      {children}
    </div>
  )
}

TaskCounter.propTypes = {
  title: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
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
