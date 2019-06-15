
import React from 'react';
import GoogleLogin from 'react-google-login';


class Login extends React.Component{

 render(){
    const responseGoogle = (response) => {
        console.log(response);
      if(!response || !response.accessToken){
          alert("sorry .google signin has failed");
          return;
      }
      let user={
          token:response.accessToken,
          name:response.profileObj.name
      };
      localStorage.setItem("user",JSON.stringify(user));
      this.props.history.push("/app");
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


