/* eslint-disable id-match */
export const signedVcOld = {
  '@context':
    [
      {
        id:                        '@id',
        type:                      '@type',
        cred:                      'https://w3id.org/credentials#',
        schema:                    'http://schema.org/',
        dc:                        'http://purl.org/dc/terms/',
        xsd:                       'http://www.w3.org/2001/XMLSchema#',
        sec:                       'https://w3id.org/security#',
        Credential:                'cred:Credential',
        issuer:                    { '@id': 'cred:issuer', '@type': '@id' },
        issued:                    { '@id': 'cred:issued', '@type': 'xsd:dateTime' },
        claim:                     { '@id': 'cred:claim', '@type': '@id' },
        credential:                { '@id': 'cred:credential', '@type': '@id' },
        expires:                   { '@id': 'sec:expiration', '@type': 'xsd:dateTime' },
        proof:                     { '@id': 'sec:proof', '@type': '@id' },
        EcdsaKoblitzSignature2016: 'sec:EcdsaKoblitzSignature2016',
        created:                   { '@id': 'dc:created', '@type': 'xsd:dateTime' },
        creator:                   { '@id': 'dc:creator', '@type': '@id' },
        domain:                    'sec:domain',
        nonce:                     'sec:nonce',
        signatureValue:            'sec:signatureValue'
      },
      {
        ProofOfNameCredential: 'https://identity.jolocom.com/terms/ProofOfNameCredential',
        schema:                'http://schema.org/',
        familyName:            'schema:familyName',
        givenName:             'schema:givenName'
      }],
  id:      'claimId:63b5d11c0d1b5566',
  issuer:  'did:jolo:6df6fd4a876dcd375fbc5d630e64e7529f27e9612aecbbbf3213861a2b0b7e9d',
  issued:  '2020-01-17T07:06:35.403Z',
  type:    ['Credential', 'ProofOfNameCredential'],
  expires: '2021-01-16T07:06:35.337Z',
  proof:   {
    created:        '2020-01-17T07:06:35.402Z',
    type:           'EcdsaKoblitzSignature2016',
    nonce:          'cf82f1b448514229',
    signatureValue: '866191eb3f7a871b59d0c665ed8a4c3b799124aa54e9faf7d2163486fd146c14047d3d4a688056d4c6d0ad221170af55561d87b872e428d30b5c1fa8ffd27f83',
    creator:        'did:jolo:6df6fd4a876dcd375fbc5d630e64e7529f27e9612aecbbbf3213861a2b0b7e9d#keys-1'
  },
  claim: {
    givenName:  'DenisUpdated',
    familyName: 'Popov',
    id:         'did:jolo:6df6fd4a876dcd375fbc5d630e64e7529f27e9612aecbbbf3213861a2b0b7e9d'
  },
  name: 'Name'
}
