import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Register = () => {
    const [nme, setNme] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fetchRes, setFetchRes] = useState('')

    const handelChange = (e) => {
        switch (e.target.id) {
            case "nme":
                setNme(e.target.value)
                break;

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
    const regSubmit = (e) => {
        e.preventDefault()
        let data = { 'name': `${nme}`, 'email': `${email}`, 'password': `${password}` }
        fetch('http://127.0.0.1:8084/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json()
        }).then(data => {
            setFetchRes(data)
        })
    }


    return (
    <>
        <video autoPlay loop  muted className='front-video' src="background.mp4"></video>
        <div className='register text-white container'>
            <h1>Register</h1>
            <form className="row g-4 " onSubmit={regSubmit}>
            <div className="col-md-4">
                    <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id='nme' onChange={handelChange} aria-describedby="emailHelp" />
            </div> 
            <div className="col-md-4">
                    <label for="exampleInputEmail1" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" id='email' onChange={handelChange} aria-describedby="emailHelp" />
            </div>
                
            <div className="col-md-4">
                    <label for="exampleInputEmail1" className="form-label">Create password</label>
                    <input type="password" className="form-control" id='pswd' onChange={handelChange} aria-describedby="emailHelp" />
            </div>
                
            <div className="col-12"> <input className='btn btn-primary' type="submit"  onClick={regSubmit} /></div>
                
            </form> <br />
            <Link className='btn btn-secondary' to='/'>Go back to Login</Link>
    
            <div>{fetchRes}</div>
        </div></>
    )
}

export default Register