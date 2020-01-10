import { CognitoUser } from 'amazon-cognito-identity-js';
import { Action, ActionFunction1, createAction } from 'redux-actions';
import { actionTypes } from 'src/constants/user/actionTypes';

type TAction = Action<CognitoUser | null>;
type TActionCreator = ActionFunction1<CognitoUser | null, TAction>;

/**
 * when already logged in and we have the cognito user object or
 * when we were logged in and we no longer have the user object
 */
const change: TActionCreator = createAction<CognitoUser | null>(
  actionTypes.change
);

export { change, TAction, TActionCreator };
