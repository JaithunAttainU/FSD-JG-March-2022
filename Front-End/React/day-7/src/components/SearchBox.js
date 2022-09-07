import React, { useState } from 'react'

function SearchBox(props) {

  const [searchText, setSearchText] = useState('')

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.fetchImages(searchText)
      }}>
        <input type="text" placeholder='Search Images...' value={searchText}
          onChange={(event) => { setSearchText(event.target.value) }} />
      </form>
    </div>
  )
}

export default SearchBox