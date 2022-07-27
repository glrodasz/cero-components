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

const handleCheck =
  ({ isChecked, setIsChecked, isPending, onCheck }) =>
  (event) => {
    event && event.stopPropagation()

    if (!isPending) {
      setIsChecked(!isChecked)
      onCheck({ isChecked: !isChecked })
    }
  }

const handleDelete =
  ({ onDelete }) =>
  (event) => {
    event && event.stopPropagation()
    onDelete()
  }

const handleClick =
  ({ onClick }) =>
  () => {
    onClick()
  }

export const Task = ({
  children,
  defaultIsChecked,
  onCheck,
  onClick,
  onDelete,
  getStyles,
  isPending,
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked && !isPending)

  return (
    <div className={getStyles('container')}>
      <Card
        onClick={handleClick({ onClick })}
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
              <div
                className={getStyles('check-container')}
                onClick={handleCheck({
                  isChecked,
                  setIsChecked,
                  isPending,
                  onCheck,
                })}
              >
                <Check isChecked={isChecked} />
              </div>
            )}
            <Spacer.Horizontal size="xs" />
            <Paragraph
              color={isChecked ? 'muted' : 'base'}
              weight="medium"
              isStriked={isChecked}
            >
              {children}
            </Paragraph>
          </div>
          <Spacer.Horizontal size="sm" />
          <Icon
            name="trash"
            size="sm"
            onClick={handleDelete({ onDelete })}
            background="inverted"
          />
        </div>
      </Card>
    </div>
  )
}

Task.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultIsChecked: PropTypes.bool,
  isPending: PropTypes.bool,
}

Task.defaultProps = {
  getStyles: () => {},
  onCheck: () => {},
  onClick: () => {},
  onDelete: () => {},
  defaultIsChecked: false,
}

export default withStyles(styles)(Task)
