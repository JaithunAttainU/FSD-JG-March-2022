import React, { useEffect, useState } from 'react'
import UsersDetailedInfo from './UsersDetailedInfo'
import '../styles/UsersList.css'


function UsersListFunc() {


  const [users, setUsers] = useState([]) //[[], func()]
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedUserInfo, setSelectedUserInfo] = useState(null)

  const fetchUser = async () => {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await userRes.json()
    setUsers(usersData)
  }

  const fetchUserByID = async () => {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
    const userData = await userRes.json()
    setSelectedUserInfo(userData)
  }

  //componenetDidMount - give [] as dependency list
  useEffect(() => {
    fetchUser()

    const intervalId = setInterval(() => {
      console.log("Interval called")
    }, 2000)

    //unmounte
    return () => {
      console.log("Coponent Unmounted")
      clearInterval(intervalId)
      // window.removeEventListener()
    }
  }, [])

  //ComponentDidUpdate - give [users, selectedUser] as dependencylist
  useEffect(() => {
    if (selectedUser) {
      fetchUserByID()
      console.log("Selected User Changed")
    }
  }, [selectedUser])

  //execute on every render
  useEffect(() => {
    console.log("No dependency list")
  })

  const styleObj = {
    backgroundColor: 'yellow',
    color: 'blue'
  }

  return (
    <React.Fragment>
      <h4 className='text-center' /*style={styleObj}*/ /*style={{ color: 'blue', backgroundColor: 'yellow' }}*/>UsersList</h4>
      {users.map((user) => {
        return (
          <div key={user.id} className='card m-1' onClick={() => setSelectedUser(user.id)}>
            <h5>{user.name}</h5>
          </div>
        )
      })}
      {selectedUserInfo ? <UsersDetailedInfo userInfo={selectedUserInfo} /> : null}
    </React.Fragment>
  )
}

export default UsersListFunc