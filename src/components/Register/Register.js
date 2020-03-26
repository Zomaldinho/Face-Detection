import React from 'react';

const Register = ({onRouteChange}) => {
  return(
    <div className=''>
      <article className="br2 ba dark-gray b--black-10 mv4 w-500 w-50-m w-25-l mw5 center">
        <main className="center pa4 black-80" >
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlfor="email-address">Username</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
            </div>
          </form>
        </main>
      </article>
    </div>  
  )
} 

export default Register;