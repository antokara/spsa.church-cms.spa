import awsAmplify from 'aws-amplify';

/**
 * initializes AWS cognito with a global configuration
 * it should be called only once per app.
 *
 * @see src/containers/AwsCognito.tsx
 * @see https://aws-amplify.github.io/docs/js/authentication#manual-setup
 */
const configureAwsCognito: () => {} = (): {} =>
  awsAmplify.configure({
    Auth: {
      region: process.env.AWS_COGNITO_REGION,
      userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.AWS_COGNITO_USER_POOL_APP_ID,
      mandatorySignIn: false,
      cookieStorage: {
        domain: process.env.AWS_COGNITO_COOKIE_DOMAIN,
        path: process.env.AWS_COGNITO_COOKIE_PATH,
        expires: Number.parseInt(
          process.env.AWS_COGNITO_COOKIE_EXPIRES_DAYS ?? '',
          undefined
        ),
        secure: process.env.AWS_COGNITO_COOKIE_SECURE
      },
      authenticationFlowType: 'USER_SRP_AUTH',
      oauth: {
        domain: process.env.AWS_COGNITO_OATH_DOMAIN,
        scope: ['email', 'profile', 'openid'],
        redirectSignIn: process.env.AWS_COGNITO_OATH_REDIRECT_SIGN_IN,
        redirectSignOut: process.env.AWS_COGNITO_OATH_REDIRECT_SIGN_OUT,
        responseType: 'code'
      }
    }
  });

export { configureAwsCognito };
