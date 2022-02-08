import React from 'react'
import { Button } from 'reactstrap'

/**
 * login button
 * @param {object=} className
 * @returns {React.ReactElement}
 */
function LoginBtn({ className }) {
  return (
    <Button
      className={className}
      size='small'
      color='primary'
      variant='outline-info'
    >
      Login
    </Button>
  )
}

export default LoginBtn
