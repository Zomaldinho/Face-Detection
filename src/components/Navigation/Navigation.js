import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Logo />
        </div>
        <div>
          <p
            onClick={() => onRouteChange('signout')}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </div>
    );
  }
};

export default Navigation;
