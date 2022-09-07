import React, { Component } from 'react'
import UsersDetailedInfo from './UsersDetailedInfo'
export default class UsersList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: null,
      selectedUserInfo: null
    }
  }

  fetchUser = async () => {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await userRes.json()
    this.setState({ users: usersData })
  }

  fetchUserByID = async () => {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.selectedUser}`)
    const userData = await userRes.json()
    this.setState({ selectedUserInfo: userData })
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.selectedUser && prevState.selectedUser !== this.state.selectedUser) {
      this.fetchUserByID()
    }
  }

  componentWillUnmount() {
    console.log("Unmounted")
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {

    let detailedCard;

    if (this.state.selectedUserInfo) {
      detailedCard = <UsersDetailedInfo userInfo={this.state.selectedUserInfo} />
    } else {
      detailedCard = <div>No User Selected</div>
    }

    return (
      <React.Fragment>
        <h4 className='text-center'>UsersList</h4>
        {this.state.users.map((user) => {
          return (
            <div key={user.id} className='card m-1' onClick={() => { this.setState({ selectedUser: user.id }) }}>
              <h5>{user.name}</h5>
            </div>
          )
        })}

        {detailedCard}
        {/* {this.state.selectedUserInfo ? <UsersDetailedInfo userInfo={this.state.selectedUserInfo} /> : null} */}

        {/* {this.state.selectedUserInfo && <UsersDetailedInfo userInfo={this.state.selectedUserInfo} />}
        {!this.state.selectedUserInfo && <div>No User Selected</div>} */}
      </React.Fragment>
    )
  }
}

//ternary Operator
//logical operator
//If else