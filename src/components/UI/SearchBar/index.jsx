import React from 'react'
import { InputGroup, Input } from 'reactstrap'

/**
 * Search component input
 * @param {string} searchItems
 * @returns {React.ReactElement}
 */
export default function SearchBar({ searchItems }) {
  return (
    <InputGroup className='search-component-group'>
      <span className='text-search-component'>Search by #</span>

      <Input
        onChange={(e) => searchItems(e.target.value)}
        type='text'
        name='search'
        className='searchbar-input'
      ></Input>
      <i className='searchbar-input-icon' />
    </InputGroup>
  )
}
