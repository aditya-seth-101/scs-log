import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [logres,setLogRes] = useState('')

    const loginSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://127.0.0.1:8084/login', { email: email, password: password })
        setLogRes(response.data)
        if (response.data.message==='Login Successful') {
            props.setUser(response.data.user)
            navigate('/main-page')
          }
    }
    const handelChange = (e) => {
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                break;
            case "pswd":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }
    return (
       <>
            <video autoPlay loop  muted className='front-video' src="background.mp4"></video>
        <div className='login text-white container'>
            <h1 className='text-white'>Login</h1>
       

            <form className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id='email' onChange={handelChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div className=" col-md-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id='pswd' onChange={handelChange} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={loginSubmit}>Sign in</button>
                    <br /><br />
                   <Link to='./register' >
                   <button type="button" className="btn reg-btn btn-secondary">Register</button>
                   </Link>
                </div>

            </form>

            <div>{logres}</div>
        </div>
       </>
    )
}

export default Login