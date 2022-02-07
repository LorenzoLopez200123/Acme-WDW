import React from 'react'
import { Card, CardFooter, CardImg, Container } from 'reactstrap'
import Avatar from 'react-avatar'

export default function CardItem() {
  return (
    <Card className={'card-item'}>
      <CardImg
        top
        width='100%'
        src='https://placebeard.it/640x640'
        alt='Card image cap'
        className='card-img-top'
      />
      <CardFooter>
        <Container className='d-flex align-items-start p-0'>
          <Avatar
            unstyled
            className={'details-avatar'}
            src={'https://placebeard.it/128x128'}
            round
          />
          <div className='container-card-details'>
            <h5 className='card-author'>Jeremy White</h5>
            <a href={'#'} className='card-tag'>
              #imgoftheday
            </a>
          </div>
        </Container>
      </CardFooter>
    </Card>
  )
}
