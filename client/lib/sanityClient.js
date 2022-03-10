import sanityClient from '@sanity/client'
//const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: 'm0hsroyw',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sksQTnFDobV8t3INxYVWUIfJvfL0BonJFRDeTDUMRevhFa46LO5KhmQehag7uqBjWoN51uL46sCaIpoTVknhVdkhkza2gyTmPncBtgZ4jnPswamokbbXXIVAJH8JvJvEj2xq8TWdXoUbGMWPtUnUYTROdoHhU7Vj5qaCn1YaRvfsA83XaX50',
  useCdn: false,
})