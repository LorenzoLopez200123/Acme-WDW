import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Container } from 'reactstrap'

/**
 * Dinamic header title hero
 * @param {string=} title
 * @returns {React.Component}
 */
export default function NavigationHeaderInfo({ title = 'Home' }) {
  return (
    <div className={'header-hero-background'}>
      <HelmetProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <link rel='canonical' href='http://wedoweb.com.co' />
        </Helmet>
      </HelmetProvider>
      <Container>
        <p className='h1 hero-title'>{title}</p>
      </Container>
    </div>
  )
}
