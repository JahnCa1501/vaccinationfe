import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './Views/Login';
import SignIn from './Views/Signin';
import Menu from './Views/Menu';
import Appointment from './Views/Appointment';
import Vacunas from './Views/Vacunas';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/menu' element={<Menu />}/>
        <Route path='/citas' element={<Appointment />}/>
        <Route path='/vacunas' element={<Vacunas />}/>
      </Switch>
    </Router>
  );
}

export default Routes;
