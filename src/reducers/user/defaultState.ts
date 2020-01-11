type TState = {
  sub?: string;
  email?: string;
  name?: string;
  groups?: string[];
  loggedIn?: boolean;
};

const defaultState: TState = {
  loggedIn: undefined // start with undefined, meaning unknown/loading state
};

export { defaultState, TState };
