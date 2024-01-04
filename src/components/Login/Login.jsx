import React, { useState } from 'react'
import Headtitle from '../../common/HeadTitle/Headtitle'
import './design.css'
import { Link } from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()

        const newValue = { email, password }
        setAllValue([...allValue, newValue])

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <Headtitle />

            <section className="forms top">
                <div className="container">
                    <div className="sign-box">
                        <p>Enter Your E-mail and Password below to log in to your account and use the benefits of our website.</p>

                        <form onSubmit={formSubmit}>


                            <input type='text' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                            <input type='password' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />

                            <div className="flex_space">
                                <div className="flex">
                                    <input type="checkbox" />
                                    <label htmlFor="">Remember Me</label>
                                </div>
                                <div className="flex">
                                    <span>Forget password</span>
                                </div>
                            </div>
                            <button className='primary-btn' type='submit'>Sign In</button>
                            <p>Don't Have Account ? <Link to="/register">Sign Up</Link> </p>

                        </form>
                    </div>
                </div>
            </section>


            <section className='show-data'>
                {allValue.map((cureentValue) => {
                    const { email, Password } = cureentValue
                    return (
                        <>
                            <div className='sign-box'>
                                <h1>Send Successfully</h1>

                                <h3>
                                    Email : <p>{email}</p>
                                </h3>
                                <h3>
                                    Password : <p>{Password}</p>
                                </h3>

                            </div>
                        </>
                    )
                })}
            </section>


        </>
    )
}

export default Login
