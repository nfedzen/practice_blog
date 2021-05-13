import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'


export default function UserBar(){
  const [user, setUser] = useState('')
  
  if (user) {
    return <Logout user={user} setUser={setUser}/>
  } else {
    return (
      <React.Fragment>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </React.Fragment>
    )
  }
}