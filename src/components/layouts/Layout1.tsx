import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { login } from 'src/actions/user/login';
import { logout } from 'src/actions/user/logout';
import { TState } from 'src/reducers/defaultState';
import { TState as TUserState } from 'src/reducers/user/defaultState';

const Layout1: () => JSX.Element = (): JSX.Element => {
  const user: TUserState = useSelector((state: TState) => state.user);
  const dispatch: Dispatch = useDispatch();

  const loginClickHandler: () => void = (): void => {
    dispatch(login());
  };
  const logoutClickHandler: () => void = (): void => {
    dispatch(logout());
  };

  const LoginOut: React.ReactNode = user.loggedIn ? (
    <button onClick={logoutClickHandler}>Logout {user.name}</button>
  ) : (
    <button onClick={loginClickHandler}>Login</button>
  );

  return <>cms{LoginOut}</>;
};

export { Layout1 };
