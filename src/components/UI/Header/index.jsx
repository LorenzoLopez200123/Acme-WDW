import { Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import LogoType from 'components/UI/LogoType'
import LoginBtn from 'components/UI/LoginBtn'
import BurguerBtn from 'components/UI/BurguerBtn'

/**
 * Header component
 *
 * @returns {React.ReactElement}
 */
function Header() {
  return (
    <>
      <Navbar light color='light' expand>
        <Container>
          <Row>
            <Col className='d-flex justify-content-between'>
              <NavbarBrand>
                <LogoType />
              </NavbarBrand>
              <div className={'container-btn--header'}>
                <LoginBtn className={'login-btn--header'} />
                <BurguerBtn className={'burguer-menu--header'} />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
