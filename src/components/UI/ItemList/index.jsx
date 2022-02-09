import React, { useEffect, useState } from 'react'
import CardItem from 'components/UI/CardItem'
import SearchBar from 'components/UI/SearchBar'
import { Row, Col, Button, Spinner } from 'reactstrap'
import { useAxios } from 'hooks/useAxios'
import env from 'conf/config'

/**
 * List of cards Component
 *
 * @returns {React.ReactElement}
 */
export default function ItemList() {
  const limit = 12
  const MAX_PAGE = 5
  const [page, setPage] = useState(1)
  const [dataRecopiled, setdataRecopiled] = useState([])
  const [{ data, isLoading, isError }, setUrl] = useAxios()

  useEffect(() => {
    if (page <= MAX_PAGE) {
      setUrl(`${env.GET_POSTS_URL}?page=${page}&limit=${limit}`)
    }
  }, [page])

  useEffect(() => {
    if (data.length) {
      setdataRecopiled((dataRecovery) => {
        return [...dataRecovery, ...data]
      })
    }
  }, [data])

  const handlePageChange = () => {
    setPage((page) => (page <= MAX_PAGE ? page + 1 : page))
  }

  if (isError) {
    return (
      <div className='w-100 d-flex justify-content-center align-items-center text-danger container-main-centered'>
        Something went wrong ...
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center w-100 container-main-centered'>
        <Spinner color='primary' className='spinner-component' />
      </div>
    )
  }

  if (dataRecopiled && dataRecopiled.length > 0) {
    return (
      <>
        <Row className='d-flex justify-content-end row-container-search'>
          <Col className='col-lg-6 col-md-12 col-sm-12 d-flex col-container-search justify-content-end'>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col className={'container-item-list'}>
            {dataRecopiled.map((e) => (
              <CardItem
                key={e?.id}
                name={e?.name}
                imageSrc={e?.image}
                tag={e?.tag}
                avatar={e?.avatar}
              />
            ))}
          </Col>
          <div className='d-flex justify-content-center'>
            <Button
              onClick={handlePageChange}
              color='primary'
              className={'button-load-more'}
            >
              <span>Load More</span>
            </Button>
          </div>
        </Row>
      </>
    )
  } else return <p>Loading...</p>
}
