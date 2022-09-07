import React from 'react'

function ImageGrid(props) {
  const { images } = props
  return (
    images.map(image => {
      return (
        <img className='m-5' src={image.urls.regular} style={{ width: '25%' }} />
      )
    })
  )
}

export default ImageGrid