import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6kvdqvro',  
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: 'skpTDyV2Onyh30A1Y40zRw0eUywaTovXTxUHIv8y9blJrVdtasSp4HnLQpoMTAlUsH8Hd1QueFeR7HffYzXRgnf7rdP6g5VL8zR5RhhqnftJrv6svPHNENfxS7zIflDbL7RksYl0TLkFejRtkFv6ECG0gOeMldU7Caq6jl8hl0KOZXl0t1U0', // Secure API token
})