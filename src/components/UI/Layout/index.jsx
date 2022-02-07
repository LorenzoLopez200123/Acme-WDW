import Header from 'components/UI/Header'
import Footer from 'components/UI/Footer'
import NavigationHeaderInfo from 'components/UI/NavigationHeaderInfo'
import { Container } from 'reactstrap'

/**
 * Layout HOC
 * @param {Object} args
 * @param {string} args.children
 * @param {string} args.title
 * @returns {React.ReactElement}
 */
export default function Layout({ children, title }) {
  return (
    <>
      <Header />
      <NavigationHeaderInfo title={title} />
      <Container className='main-container'>{children}</Container>
      <Footer />
    </>
  )
}
