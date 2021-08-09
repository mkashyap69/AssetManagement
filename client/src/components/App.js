import '../css/App.css';
import AssetDashBoard from './AssetDashBoard';
import AssetPage from './AssetPage';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isExpired } from 'react-jwt';

function App() {
  const user = useSelector((state) => state?.user?.data?.data);
  const token = useSelector((state) => state?.user?.data?.token);

  useEffect(() => {
    if (token) {
      console.log(isExpired(token),'token');

      if (isExpired(token)) {
        console.log(isExpired(token));
      }
    }
  }, []);

  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route
            path="/home"
            render={() => (user ? <AssetDashBoard /> : <Login />)}
          />
          <Route
            path="/add-asset"
            render={() => (user ? <AssetPage /> : <Login />)}
          />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
