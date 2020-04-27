import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = (event) =>
    this.setState({ signInEmail: event.target.value });

  onPasswordChange = (event) =>
    this.setState({ signInPassword: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    fetch('https://faces-detection-api.herokuapp.com/signin', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data === 'wrong credentials') {
          alert('Wrong Credentials');
        } else if(data === 'empty fields'){
          alert('Some fields are empty')
        } else {
          this.props.loaduser(data);
          return this.props.onRouteChange('home');
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="center" style={{width: '1000px'}}>
        <article className="br2 ba dark-gray b--black-10 mv4 w-90 w-70-m w-35-l mw7 center" style={{width: '70%'}}>
          <main className="center pa4 black-80 w-100" >
            <form className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    required
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    required
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange('register')}
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default Signin;
