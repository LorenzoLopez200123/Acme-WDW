// @ts-check
import React from 'react'
import { Card, CardFooter, CardImg, Container } from 'reactstrap'
import Avatar from 'react-avatar'

/**
 * Item card photo and description
 * @param {Object} args
 * @param {string} args.name
 * @param {string} args.imageSrc
 * @param {string=} args.tag
 * @param {string=} args.avatar
 * @returns {React.ReactElement}
 */
export default function CardItem({
  name,
  tag,
  imageSrc = 'https://placebeard.it/640x640',
  avatar = 'https://placebeard.it/128x128',
}) {
  return (
    <Card className={'card-item'}>
      <CardImg top src={imageSrc} alt='image post' className='card-img-top' />
      <CardFooter>
        <Container className='d-flex align-items-start p-0'>
          <Avatar unstyled className={'details-avatar'} src={avatar} round />
          <div className='container-card-details'>
            <h5 className='card-author'>{name}</h5>
            <a href={'#'} className='card-tag'>
              #{tag}
            </a>
          </div>
        </Container>
      </CardFooter>
    </Card>
  )
}
