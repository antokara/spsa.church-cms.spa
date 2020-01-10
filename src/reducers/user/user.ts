import { CognitoIdToken, CognitoUserSession } from 'amazon-cognito-identity-js';
import { produce } from 'immer';
import { Reducer } from 'redux';
import { TAction } from 'src/actions/user/change';
import { actionTypes } from 'src/constants/user/actionTypes';
import { defaultState, TState } from 'src/reducers/user/defaultState';

const user: Reducer = produce((draft: TState, action: TAction) => {
  switch (action.type) {
    case actionTypes.change:
      // try to get the session/token/user info
      if (action.payload) {
        const userSession: CognitoUserSession | null = action.payload.getSignInUserSession();
        if (userSession) {
          const idToken: CognitoIdToken = userSession.getIdToken();
          draft.sub = idToken.payload.sub;
          draft.name = idToken.payload.name;
          draft.email = idToken.payload.email;
          draft.groups = idToken.payload['cognito:groups'];
          draft.loggedIn = true;
        }
      } else {
        // logout
        draft.loggedIn = false;
      }
    default:
  }

  return draft;
}, defaultState);

export { user };
