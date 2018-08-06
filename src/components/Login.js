import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { jwtToken } from '../ApplicationStatus';

class Login extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: true,
      message: ''
    };
  }

  render() {
    let input;
    return (
      <div className="alert alert-secondary" role="alert" id="login">
        To-Do List
        <div className="input-group mb-3" id="block1">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              account
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="please input your account"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="pwd"
            ref="username"
          />
        </div>
        <div className="input-group mb-3" id="block2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              password
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="please input your password"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="pwd"
            ref="pwd"
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          id="register"
          onClick={() => {
            console.log('kkk11', this.refs.username.value);
            console.log('kkk22', this.refs.pwd.value);

            fetch('/api/users', {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                name: this.refs.username.value,
                password: this.refs.pwd.value
              })
            })
              .then(response => {
                return response.text();
              })
              .then(token => {
                if (token.length < 50) {
                  console.log('888');
                  this.setState({
                    isShow: false,
                    message: token
                  });
                } else {
                  // console.log("jwtToken",localStorage.getItem("token")),
                  this.setState({
                    isShow: true,
                    message: token
                  });
                  browserHistory.push('/login');
                }
              });
          }}
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          id="go"
          onClick={() => {
            console.log('kkk', this.refs.username.value);
            console.log('kkk', this.refs.pwd.value);

            fetch('/api/login', {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                name: this.refs.username.value,
                password: this.refs.pwd.value
              })
            })
              .then(response => {
                return response.text();
              })
              .then(token => {
                if (token.length < 50) {
                  console.log('888');
                  this.setState({
                    isShow: false,
                    message: token
                  });
                } else {
                  localStorage.setItem('token', token);
                  // console.log("jwtToken",localStorage.getItem("token")),
                  this.setState({
                    isShow: true
                  });
                  browserHistory.push('/todo');
                }
              });
          }}
        >
          login
        </button>
        <div
          className="alert alert-danger"
          role="alert"
          id="alert"
          hidden={this.state.isShow}
        >
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default Login;
