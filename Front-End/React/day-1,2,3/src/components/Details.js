import React from 'react'

// function Details() {
//   return (
//     <div>Details</div> //JSX
//   )
// }


class Details extends React.Component {
  // //Mandatory in every class componenet
  render() {
    console.log(this.props)

    // this.props.videoDetail = { name: 'dfsg' }
    const { title, uploadTime, uploaderAvatar, uploaderName, views } = this.props.videoDetail
    return (
      <div className='row'>
        <div className='col-2'>
          <img className="img-fluid rounded-circle" src={uploaderAvatar} />
        </div>
        <div className='col-10'>
          <h6>{title}</h6>
          <div className='text-muted'>
            <h6>{uploaderName}</h6>
            <h6>{views} Views . {uploadTime} ago</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Details