import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * AWS Amplify Gen 2 Data Configuration (AppSync GraphQL + DynamoDB)
 * Models:
 * - WaitlistEntry: Captures user registrations from the Waitlist modal
 * - ContactRequest: Captures user messages from the Contact / Call modal
 */
const schema = a.schema({
  WaitlistEntry: a
    .model({
      fullName: a.string(),
      email: a.string().required(),
      phone: a.string(),
      role: a.string(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.guest(), allow.authenticated()]),

  ContactRequest: a
    .model({
      fullName: a.string(),
      email: a.string(),
      phone: a.string(),
      preferredTime: a.string(),
      message: a.string(),
      createdAt: a.datetime(),
    })
    .authorization((allow) => [allow.guest(), allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
