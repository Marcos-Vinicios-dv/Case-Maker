import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Cart from '../pages/Cart';
import Customizar from '../pages/Customize';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { Profile } from '../pages/Profile';
import { User } from '../services/hooks/useUser';
import { IState } from '../store';

export default function MainRoutes() {
  const user = useSelector<IState, User>((state) => state.user);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/customizar/:id">
        <Customizar />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/login">
        {user.email ? <Redirect to="/perfil" /> : <Login />}
      </Route>
      <Route path="/perfil">
        <Profile />
      </Route>
    </Switch>
  );
}
