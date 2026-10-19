import { defineAuth } from '@aws-amplify/backend';

/**
 * AWS Amplify Gen 2 Authentication Configuration (Amazon Cognito)
 * Configured with email sign-in / sign-up and password authentication.
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false,
    },
  },
});
