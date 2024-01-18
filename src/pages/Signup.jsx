import React from 'react'
import './SignUp.css'
function signup() {
  return (
    <div className='SignUpBody'>
        <div><h1>Signup Page</h1></div>
        <div className='Form'>
            <form>
                <label>
                    Email: 
                    <input type = "email"/>
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <br />
                <button type="submit">Sign Up</button>
                <button className="Forgotpass" type="submit">Forgot Password</button>
            </form>
        </div>



    </div>
  )
}

export default signup