interface IActionTypes {
  readonly login: string;
  readonly change: string;
  readonly logout: string;
}

const actionTypes: IActionTypes = {
  login: 'USER.LOGIN',
  change: 'USER.CHANGE',
  logout: 'USER.LOGOUT'
};

export { actionTypes };
