// import { RouterState } from 'connected-react-router';
import { Action, Location, LocationState } from 'history';
import {
  defaultState as layoutDefaultState,
  TState as TLayoutState
} from 'src/reducers/layout/defaultState';
import {
  defaultState as userDefaultState,
  TState as TUserState
} from 'src/reducers/user/defaultState';

// TODO remove when bug is fixed and use the RouterState type commented out above
// @see https://github.com/supasate/connected-react-router/issues/381
interface ILocation<T = LocationState> extends Location {
  query?: { [key: string]: string };
}

interface IRouterState<T = LocationState> {
  location: ILocation<T>;
  action: Action;
}

type TState = {
  router: IRouterState;
  layout: TLayoutState;
  user: TUserState;
};

const routerDefaultState: IRouterState = {
  action: 'POP',
  location: {
    hash: '',
    pathname: '/',
    search: '',
    state: undefined,
    query: {}
  }
};

const defaultState: TState = {
  router: routerDefaultState,
  layout: layoutDefaultState,
  user: userDefaultState
};

export { defaultState, TState };
