import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Register = () => {
    const [nme, setNme] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [stuType, setStuType] = useState('')


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
            case "inputMobile":
                setMobile(e.target.value)
                break;
            case "stuType":
                setStuType(e.target.value)
                console.log(stuType)
                break;

            default:
                break;
        }
    }
    const regSubmit = (e) => {
        e.preventDefault()
        let data = { 'name': `${nme}`, 'email': `${email}`, 'password': `${password}`,'mobile':`${mobile}` }
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
            <video autoPlay loop muted className='front-video' src="background.mp4"></video>
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

                   

              <br />





                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="inputMobile" />
                    </div>
                    <select class="form-select" aria-label="Default select example" id='stuType'>
                        <option selected>Student Type</option>
                        <option value="local">Institute Local</option>
                        <option value="outsider">Outsider</option>
                    </select>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Batch Name</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Faculty</label>
                        <input type="text" className="form-control" id="inputEmail4" />
                    </div>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Course</option>
                        <option value="JAVA">JAVA</option>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>


                    <div class="input-group date" data-provide="datepicker">
                        <label htmlFor=""> Year of Passing{"( Highest education passing year)"}
                            <input type="date" class="form-control" />
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-th"></span>
                            </div>
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Highest Education and Major Subject</label>
                        <input type="text" className="form-control" id="inputEmail4" />
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Gap in employment{"(If any)"}</label>
                        <input type="text" className="form-control" defaultValue={0} id="inputEmail4" />
                    </div>
                    <div className="col-12"> <input className='btn btn-primary' type="submit" onClick={regSubmit} /></div>

                </div>   </form><br /> 
                <Link className='btn btn-secondary' to='/'>Go back to Login</Link>
            <div>{fetchRes}</div>
            </div>
           
        </>
    )
}

export default Register