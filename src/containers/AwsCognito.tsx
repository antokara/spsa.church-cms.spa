import { HubCapsule } from '@aws-amplify/core/lib-esm/Hub';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth, Hub } from 'aws-amplify';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { change } from 'src/actions/user/change';
import { configureAwsCognito } from 'src/helpers/configureAwsCognito';

// initialize AWS Cognito
configureAwsCognito();

/**
 * AWS Cognito Container that handles the User Auth State
 * it dispatches the user/change action with the user object or null accordingly...
 *
 * @see https://aws-amplify.github.io/docs/js/authentication#oauth-and-hosted-ui
 */
const AwsCognito: () => null = (): null => {
  const dispatch: Dispatch = useDispatch();

  /**
   * attempt to retrieve user information and confirm loggedIn status
   */
  const authUser: () => void = (): void => {
    Auth.currentAuthenticatedUser()
      .then((user: CognitoUser): void => {
        // we're logged in, set the user object
        dispatch(change(user));
      })
      .catch((): void => {
        // not logged in, reset any user object
        dispatch(change(null));
      });
  };

  // on component did mount
  // try to get the current authenticated user
  // note: this only works if we have previously logged in
  //       it does not work right after the redirection from the hosted login page...
  React.useEffect(authUser, []);

  // listen for events that take place after the redirection from the hosted login page...
  Hub.listen('auth', ({ payload: { event, data } }: HubCapsule) => {
    switch (event) {
      case 'signIn':
        // just logged in
        authUser();
        break;
      case 'signOut':
        // just logged out, reset any user object
        dispatch(change(null));
        break;
      default:
    }
  });

  return null;
};

export { AwsCognito };
