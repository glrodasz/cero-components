import React from 'react'
import PropTypes from 'prop-types'

import Loading from '../../atoms/Loading'
import Error from '../Error'

export const LoadingError = ({
  children,
  isLoading,
  errorMessage,
  errorTitle,
}) => {
  if (isLoading) {
    return <Loading isShown={isLoading} />
  }

  if (errorMessage) {
    return <Error title={errorTitle}>{errorMessage}</Error>
  }

  return <>{children}</>
}

LoadingError.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorTitle: PropTypes.string,
}

export default LoadingError
