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

const handleClick = ({ checked, setChecked, onCheck }) => () => {
  setChecked(!checked)
  onCheck(!checked)
}

export const Task = ({
  children,
  defaultChecked,
  onCheck,
  onDelete,
  styles,
}) => {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <Card onClick={handleClick({ checked, setChecked, onCheck })}>
      <div className={styles('task')}>
        <div className={styles('content')}>
          <Check checked={checked} />
          <Spacer.Vertical size="xs" />
          <Paragraph
            color={checked ? 'muted' : 'base'}
            weight="medium"
            isStriked={checked}
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
  )
}

Task.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultChecked: PropTypes.bool,
}

Task.defaultProps = {
  styles: () => {},
  onCheck: () => {},
  onDelete: () => {},
  defaultChecked: false,
}

export default withStyles(styles)(Task)
