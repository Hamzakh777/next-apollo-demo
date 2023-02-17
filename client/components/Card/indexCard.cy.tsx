import React from 'react'
import { Card } from './index'
import { User } from '../../../core/src/__generated__/client/graphql';

const USER: User = {
  address: 'adsf asdfdf',
  emailAddress: 'asdf@asdf.adf',
  fullName: "test test",
  phoneNumber: '01324134',
  uuid: 'asdf44',
}

describe('<Card />', () => {
  it('renders', () => {
    cy.mount(<Card user={USER}/>)

    cy.get('span').contains(USER.fullName);
    cy.get('p').contains(USER.emailAddress);
  })
})

// Prevent TypeScript from reading file as legacy script
export {};