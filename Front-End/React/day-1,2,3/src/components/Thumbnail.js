import React from 'react'

function Thumbnail(props) {

  const { imageUrl } = props
  return (
    <img src={props.imageUrl} />
  )
}

export default Thumbnail