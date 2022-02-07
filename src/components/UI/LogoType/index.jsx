import React from 'react'
import Logo from 'assets/img/Logo.svg'
import LogoWhite from 'assets/img/logo-white.svg'

/**
 * logo to be used
 * @param {Object} args
 * @param {boolean} args.white
 * @param {string=} args.size
 * @returns {ReactElement}
 */
export default function LogoType({ white, size = '100%' }) {
  return (
    <div className='d-flex align-items-end'>
      {white ? (
        <img src={LogoWhite} alt='image logo' width={size} />
      ) : (
        <img src={Logo} alt='image logo' width={size} />
      )}
    </div>
  )
}
