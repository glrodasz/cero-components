import React from 'react'

// eslint-disable-next-line react/display-name
const SvgrMock = React.forwardRef((props, ref) => <span ref={ref} {...props} />)

export const ReactComponent = SvgrMock
export default SvgrMock
