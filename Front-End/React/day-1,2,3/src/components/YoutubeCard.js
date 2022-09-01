import React from 'react'
import Details from './Details'
import Thumbnail from './Thumbnail'

function YoutubeCard(props) {

  //fechn api - Videos

  // props = { name: 'dsfdsg' } //not possible
  return (
    // React.Fragment
    <div className='card w-30'>
      <Thumbnail imageUrl={props.videoDetail.imageUrl} />
      <Details videoDetail={props.videoDetail} />
    </div>
  )
}

export default YoutubeCard