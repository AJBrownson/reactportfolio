import React from 'react'
import { Wrapper, Heading, BgText, LilText, FormWrapper } from './Contact.elements';
import Form from '../Form/Form';

const Contact = () => {
  return (
    <>
    <Wrapper>
      <Heading>Contact Me</Heading>
      <BgText>Go on and hit me up for all kinds of online projects and stuff</BgText>
      <LilText>I typically reply wihin 6 hours &#128515;</LilText>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Wrapper>
    </>
  )
}

export default Contact;
