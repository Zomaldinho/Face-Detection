import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onNameChange = (event) => {
    return this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    return this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    return this.setState({ password: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch('https://faces-detection-api.herokuapp.com/register', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === 'unable to register') {
          alert('Email is already Registered');
        } else if (data === 'empty fields'){
          alert('Please fill all the required fields')
        } else {
          this.props.loaduser(data);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <div className="">
        <article className="br2 ba dark-gray b--black-10 mv4 w-90 w-70-m w-35-l mw7 center">
          <main className="center pa4 black-80 w-100">
            <form className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Username
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="username"
                    id="username"
                    onChange={this.onNameChange}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    required
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
                  value="Register"
                />
              </div>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
