import React from 'react'
import { Container } from 'reactstrap'
import LogoType from 'components/UI/LogoType'

/**
 * Footer component
 *
 * @returns {React.ReactElement}
 */
export default function Footer() {
  return (
    <footer className='footer'>
      <Container
        className='d-flex justify-content-center align-items-center footer-container'
        fluid
      >
        <div className='footer-logo_container'>
          <LogoType white />
        </div>
        <p className='text-white text-copyright m-0 align-self-end '>
          ©All right reserved 2020
        </p>
      </Container>
    </footer>
  )
}
