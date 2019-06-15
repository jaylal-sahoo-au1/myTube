
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


class Login extends React.Component{

 render(){
    const responseGoogle = (response) => {
      
      }
       return (
        <GoogleLogin
        clientId="1001995257205-ldu9pgdesr74pl8d6fca119vakpjs79e.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
       );
 }
}

export {Login};


