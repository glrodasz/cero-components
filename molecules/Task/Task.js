import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Spacer from '../../layout/Spacer'
import Card from '../../atoms/Card'
import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'
import Check from '../../atoms/Check'

import styles from './Task.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

const handleCheck = ({ isChecked, setIsChecked, isPending, onCheck }) => () => {
  if (!isPending) {
    setIsChecked(!isChecked)
    onCheck(!isChecked)
  }
}

export const Task = ({
  children,
  defaultIsChecked,
  onCheck,
  onDelete,
  getStyles,
  isPending,
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked && !isPending)

  return (
    <div className={getStyles('container')}>
      <Card
        onClick={handleCheck({ isChecked, setIsChecked, isPending, onCheck })}
        isClickable={!isPending}
        isDraggable={isPending}
      >
        <div
          className={getStyles('task', ['type'], {
            'is-checked': isChecked,
          })}
        >
          <div className={getStyles('content')}>
            {isPending ? (
              <Icon name="grip" size="sm" />
            ) : (
              <Check isChecked={isChecked} />
            )}
            <Spacer.Vertical size="xs" />
            <Paragraph
              color={isChecked ? 'muted' : 'base'}
              weight="medium"
              isStriked={isChecked}
            >
              {children}
            </Paragraph>
          </div>
          <Spacer.Vertical size="sm" />
          <div onClick={(event) => event.stopPropagation()}>
            <Icon
              name="trash"
              size="sm"
              onClick={onDelete}
              background="inverted"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

Task.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultIsChecked: PropTypes.bool,
  isPending: PropTypes.bool,
}

Task.defaultProps = {
  getStyles: () => {},
  onCheck: () => {},
  onDelete: () => {},
  defaultIsChecked: false,
}

export default withStyles(styles)(Task)
