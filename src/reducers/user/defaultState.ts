type TState = {
  sub?: string;
  email?: string;
  name?: string;
  groups?: string[];
  loggedIn: boolean;
};

const defaultState: TState = {
  loggedIn: false
};

export { defaultState, TState };
