# spsa.church

St. Peter & St. Andrew Coptic Orthodox Church website - CMS SPA (https://spsa.church)

## AWS infrastructure requirements

1. cognito user pool
   1. Required attributes name, email
   1. Sign in method: Email address or phone number / Allow email addresses
   1. Only allow administrators to create users
   1. MFA: optional or required (Time-based One-time Password)
   1. Verify email address
   1. App Client
      1. Create with:
         1. No Generate client secret (important)
         1. Enable lambda trigger based custom authentication (ALLOW_CUSTOM_AUTH)
         1. Enable SRP (secure remote password) protocol based authentication (ALLOW_USER_SRP_AUTH)
         1. Enable refresh token based authentication (ALLOW_REFRESH_TOKEN_AUTH)
         1. Prevent User Existence Errors (enabled)
      1. Enabled Identity Providers: Cognito User Pool
      1. Callback URL(s): https://domain/dashboard
      1. Sign out URL(s): https://domain/logout
      1. OAuth 2.0
         1. Allowed OAuth Flows: Authorization code grant
         1. Allowed OAuth Scopes: email, openid, profile
      1. Amazon Cognito domain (define one or use Your own domain)
      1. UI Customization (at least the logo)
