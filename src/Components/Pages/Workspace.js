import React from 'react';
import { Wrapper } from './Workspace.elements';
import Computers from '../../Assets/Computers.png';

const Workspace = () => {
  return (
    <>
    <Wrapper>
      <img src={Computers} alt='A developer computer setup' />
      <h3>The tools I work with will be displayed here</h3>
    </Wrapper>
    </>
  )
}

export default Workspace
