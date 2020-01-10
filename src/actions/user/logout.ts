import { Auth } from 'aws-amplify';
import { Action, ActionFunction1, createAction } from 'redux-actions';
import { actionTypes } from 'src/constants/user/actionTypes';

type TAction = Action<void>;
type TActionCreator = ActionFunction1<void, TAction>;

/**
 * starts a logout redirection, etc.
 * it should take the user to the logout page, one way or another.
 */
const logout: TActionCreator = createAction<void>(actionTypes.logout, () => {
  Auth.signOut();
});

export { logout, TAction, TActionCreator };
