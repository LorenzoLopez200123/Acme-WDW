import React from 'react'
import CardItem from 'components/UI/CardItem'
import SearchBar from 'material-ui-search-bar'
import { Row, Col, Button } from 'reactstrap'

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * List of cards Component
 *
 * @returns {React.ReactElement}
 */
export default function ItemList() {
  return (
    <>
      <Row className='d-flex justify-content-end row-container-search'>
        <Col className='col-lg-6 col-md-6 col-sm-12 d-flex col-container-search justify-content-end'>
          <span className='text-search-component'>Search by #</span>
          <SearchBar placeholder='' className='search-component' />
        </Col>
      </Row>
      <Row>
        <Col className={'container-item-list'}>
          {test.map((e, idx) => (
            <CardItem key={idx} />
          ))}
        </Col>
        <div className='d-flex justify-content-center'>
          <Button color='primary' className={'button-load-more'}>
            <span>Load More</span>
          </Button>
        </div>
      </Row>
    </>
  )
}
