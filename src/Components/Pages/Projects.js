import React from 'react';
import Construction from '../../Assets/Construction.png';
import {Wrapper} from './Projects.elements';

const Projects = () => {
  return (
    <>
     <Wrapper>
      <img src={Construction} alt='construction illustration' />
      <h3>We are currently working on some amazing stuff so please check back later</h3>
      </Wrapper>
    </>
  )
}

export default Projects
