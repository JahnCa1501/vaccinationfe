import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Views/Login';
import SignIn from './Views/Signin';
import Summary from './Views/Summary';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/home" element={<PrivateRoute><Summary /></PrivateRoute>} />
      </Switch>
    </Router>
  );
}

export default Routes;
