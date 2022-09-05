import React from 'react'

function UsersDetailedInfo(props) {
  const { userInfo } = props
  return (
    <div>
      <h4>{userInfo.name}</h4>
      <div>Email: {userInfo.email}</div>
      <div>Website: {userInfo.website}</div>
    </div>
  )
}

export default UsersDetailedInfo