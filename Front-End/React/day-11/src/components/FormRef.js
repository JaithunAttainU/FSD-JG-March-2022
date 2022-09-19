import React, { useEffect, useRef } from 'react'
import Albums from './Albums'

function FormRef() {

  //React.createRef()
  const inputRef = useRef()
  console.log(inputRef)

  useEffect(() => {

    // const inputele = document.getElementById('searchText')
    // console.log(inputele)
    // document.getElementById('searchText')

    inputRef.current.focus()
    inputRef.current.setAttribute('style', 'background-color: yellow')
  }, [])


  return (
    <div>
      <form>
        <label>Search:</label>
        <input type={"text"} id="searchText" placeholder="Search" ref={inputRef} />
      </form>
    </div>
  )
}

export default FormRef