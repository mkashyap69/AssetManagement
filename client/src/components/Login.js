import React, { useEffect, useState } from 'react';
import { login } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const errorMessage = useSelector((state) => state?.user?.error);
  const user = useSelector((state) => state?.user?.data?.data);

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  // useEffect(() => {
  //   if (user) {
  //     history.push('/home');
  //   }
  // }, [user]);

  const loginSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="container login-container">
      <div className="login">
        <div className="login--credentials">
          <p>
            <strong>Normal User</strong> - U:user P:user
          </p>
          <p>
            <strong>Administrator</strong> - U:admin P:admin
          </p>
        </div>
        <div className="login-box">
          <div className="login-box--heading">
            IOT Based Asset Monitoring System
          </div>
          <div className="login-box--inputs">
            <form onSubmit={loginSubmit}>
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Login</button>
              <p style={{ color: 'red' }}>{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
