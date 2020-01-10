import { Auth } from 'aws-amplify';
import { Action, ActionFunction1, createAction } from 'redux-actions';
import { actionTypes } from 'src/constants/user/actionTypes';

type TAction = Action<void>;
type TActionCreator = ActionFunction1<void, TAction>;

/**
 * starts a login redirection, etc.
 * it should take the user to the login page, one way or another.
 */
const login: TActionCreator = createAction<void>(actionTypes.login, () => {
  Auth.federatedSignIn();
});

export { login, TAction, TActionCreator };
