import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

/**
 * AWS Amplify Gen 2 Unified Backend Definition
 * Bundles Cognito Authentication and AppSync/DynamoDB Data resources.
 */
defineBackend({
  auth,
  data,
});
