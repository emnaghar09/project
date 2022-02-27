import React from 'react'
import {useSelector } from 'react-redux'
import Admin from './admin'
import Member from './member'
import Coach from './coach'


function Profile() {
  // const currentUser=useSelector(State => state.contactReducer.currentUser)
  return (
    <div>
    {/* {currentUser.role = 'admin'? <Admin/> : currentUser.role = 'member'?  <Member/> : <Coach/> } */}
    <Member/>
    {/* <Admin/> */}
    {/* <Coach/> */}
    </div>
  )
}

export default Profile