import React,{useContext} from 'react'
import {UserContext} from './App'
const Test = () => {
    const user = useContext(UserContext);
  return (
    <div>{user} ghfghfgh</div>
  )
}

export default Test