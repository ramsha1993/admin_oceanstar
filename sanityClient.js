import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_APP_SANITY_PROJECT_ID,  
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.NEXT_APP_SANITY_TOKEN, // Secure API token
})