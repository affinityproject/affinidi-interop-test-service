/* eslint-disable id-match */
import { InputPresentationChallenge, InputSignCredentials, InputVerifyPresentation } from '../interop/interop.dto'
import { signedVcOld } from '../factory/signedCredential'
import { signedPresentation } from '../factory/signedPresentation'
import { buildVCV1Unsigned, buildVCV1Skeleton } from '@affinidi/vc-common'
import { VCSPhonePersonV1, getVCPhonePersonV1Context } from '@affinidi/vc-data'
import { unsignedCredentials } from '../factory/unsignedCredential'

// Local Constants
const did = process.env.DID.replace(/'/g, '')
const issuerDid = process.env.ISSUER_DID.replace(/'/g, '')
const credentialOfferResponseToken = process.env.CREDENTIAL_OFFER_REQUEST_TOKEN
const _didElem = process.env.DID_ELEM.replace(/'/g, '')

// Request Objects
export const DID = did
export const requestDidIsResolvable = {
  did
}

export const requestOfferToken = {
  offeredCredentials: [
    { type: 'Credential' }
  ]
}

export const requestOfferTokenArr = {
  offeredCredentials: [
    { type: 'Credential-1' },
    { type: 'Credential-2' }
  ]
}

export const requestVpIsVerifiable = {
  vp: signedPresentation
}

export const requestSignCredentials: InputSignCredentials = {
  responseToken: credentialOfferResponseToken,
  unsignedCredentials
}

export const requestPresentationChallenge: InputPresentationChallenge = {
  issuerDid,
  credentialRequirements: [
    { type: ['VerifiableCredential', 'PhoneCredentialPersonV1'] }
  ]
}

export const requestVerifyPresentation: InputVerifyPresentation = {
  vp: signedPresentation
}

// Invalid Request Objects
export const invalidRequestOfferTokenArr = {
  offeredCredentials: [
    { type: 'Credential', signedVcOld }
  ]
}

export const invalidRequestOfferTokenObj = {
  OfferedCredentials: {
    type: ['Credential', signedVcOld]
  }
}

// Invalid Objects
export const invalidDid =
  'did:f559265b6c1becd56109c5623435fa797ad4308a4a686f8eda709f3387d303e6'

// when credential is provided as non-array object
export const invalidUnsignedCredentials = [
  buildVCV1Unsigned({
    skeleton: buildVCV1Skeleton<VCSPhonePersonV1>({
      id:                'urn:uuid:11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
      credentialSubject: {
        data: {
          '@type':   ['Person', 'PersonE', 'PhonePerson'],
          telephone: '+1 555 555 5555'
        }
      },
      holder:  { id: 'urn:uuid:11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' },
      type:    'PhoneCredentialPersonV1',
      context: getVCPhonePersonV1Context()
    }),
    issuanceDate:   new Date().toISOString(),
    expirationDate: new Date(new Date().getTime() + 10 * 60 * 1000).toISOString()
  })
]

// when Expiry date should be greater than current date
export const invalidUnsignedCredentialsExpiryDate = [
  buildVCV1Unsigned({
    skeleton: buildVCV1Skeleton<VCSPhonePersonV1>({
      id:                'urn:uuid:11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
      credentialSubject: {
        data: {
          '@type':   ['Person', 'PersonE', 'PhonePerson'],
          telephone: '+1 555 555 5555'
        }
      },
      holder:  { id: 'urn:uuid:11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' },
      type:    ['PhoneCredentialPersonV1', 'TestDenisCred'],
      context: getVCPhonePersonV1Context()
    }),
    issuanceDate:   new Date().toISOString(),
    expirationDate: new Date().toISOString()
  })
]

// Response Objects
export const resultAffinityValidateCredential = {
  result: true,
  error:  ''
}

export const resultVCInvalidSignature = {
  result: false,
  error:  'invalid_param: Invalid value for field "issuer": Expected non empty string'
}

export const resultExpiredVC =  {
  result: false,
  error:  'invalid_param: Invalid value for field "expirationDate": Credential "urn:uuid:11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000" is expired.'
}

export const resultUnknownVCError =  {
  result: false,
  error:  'unknown condition'
}

export const resultAffinityValidatePresentation = {
  result: true,
  error:  ''
}

export const resultOfferRequestToken = process.env.RESULT_OFFER_REQUEST_TOKEN

export const resultGetVPChallenge = process.env.PRESENTATION_CHALLENGE_TOKEN

export const resultVerifyPresentation = {
  isValid:             true,
  did:                 '',
  challenge:           '',
  suppliedCredentials: {}
}

export const resultVPInvalidSignature = {
  result: false,
  error:  'invalid_param: Invalid value for field '
}

export const resultUnknownVPError =  {
  result: false,
  error:  'unknown condition'
}

export const suppliedCredentials = [{
  id:     '',
  issuer: '',
  proof:  '',
  claim:  ''
}]

// Other objects
export const didElem = _didElem
