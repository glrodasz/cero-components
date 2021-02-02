import React from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Divider from '../../atoms/Divider'
import Spacer from '../../layout/Spacer'

import styles from './TaskCounter.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const TaskCounter = ({ children, current, total, getStyles }) => {
  return (
    <div className={getStyles('task-counter')}>
      <div className={getStyles('container')}>
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
  total: PropTypes.number,
}

TaskCounter.defaultProps = {
  getStyles: () => {},
  current: 0,
}

export default withStyles(styles)(TaskCounter)
