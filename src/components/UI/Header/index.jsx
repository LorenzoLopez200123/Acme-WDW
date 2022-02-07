import { Button, Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap'
import LogoType from 'components/UI/LogoType'

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
              <Button size='small' color='primary' variant='outline-info'>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
