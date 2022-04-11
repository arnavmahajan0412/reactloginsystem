import React from 'react'

export const Login = (props) => {
  return (
    <section className="login">
        <div className='loginContainer'>
            <label>  Username: </label>
            <input type="text" autoFocus required value={props.email} onChange = {(e) => props.setEmail(e.target.value)} />
            <p className="errorMsg">{props.emailError}</p>
            <label>  Password: </label>
            <input type="text" autoFocus required value={props.password} onChange = {(e) => props.setPassword(e.target.value)} />
            <p className="errorMsg">{props.passwordError}</p>
            <div className="btnContainer">
                {props.hasAccount ?(
                    <>
                        <button onClick={props.handlelogin}>Sign in</button>
                        <p>Don't have an account? <span onClick={() => props.sethasAccount(!props.hasAccount)}>Signup</span></p>
                    </>
                ): (
                    <>
                        <button onClick={props.handleSignup}>Sign up</button>
                        <p>Already have an account? <span onClick={() => props.sethasAccount(!props.hasAccount)}>Signin</span></p>
                    </>
                )}
            </div>
        </div>
    </section>
  )
}
