import React from 'react'
import { InputGroup, Input } from 'reactstrap'

export default function SearchBar() {
  return (
    <InputGroup className='search-component-group'>
      <span className='text-search-component'>Search by #</span>

      <Input type='text' name='search' className='searchbar-input'></Input>
      <i className='searchbar-input-icon' />
    </InputGroup>
  )
}
