import React from 'react'
import { Button } from 'reactstrap'
import hamburgerMenuImg from 'assets/img/hamburger.svg'

/**
 * Burger menu button
 * @param {object=} className
 * @returns {React.ReactElement}
 */
export default function BurguerBtn({ className }) {
  return (
    <Button
      className={className}
      size='small'
      color='primary'
      variant='outline-info'
    >
      <img src={hamburgerMenuImg} alt='burger-menu' />
    </Button>
  )
}
