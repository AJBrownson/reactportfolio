import React from 'react';
import { NavIcon, NavLogo } from './Footer.elements';
import { Foooter, FooterContainer, FooterMenu, FooterHeader, FooterItem, FooterLink, FooterBottom } from './Footer.elements';
import { Links1, Links2, Links3, Links4 } from '../Pages/HomeView.elements';
import { Social } from './Footer.elements';


const Footer = () => {
  return (
    <>
      <Foooter>
          <FooterContainer>
              <NavLogo to='/'>
                  <NavIcon />
                  ANNI
              </NavLogo>

              <FooterMenu>
                <FooterHeader> Customer Service </FooterHeader>
                <FooterItem>
                    <FooterLink to='/contact'>Contact Me</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/reviews'>Customer Reviews</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/faqs'>FAQs</FooterLink>
                </FooterItem>
                </FooterMenu>

                <FooterMenu>
                <FooterHeader> Information </FooterHeader>
                <FooterItem>
                    <FooterLink to='/about'>About Me</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/articles'>Articles</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/projects'>Projects</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to='/workspace'>Workspace</FooterLink>
                </FooterItem>
                </FooterMenu>

                <FooterMenu>
                    <FooterHeader>Let's Connect</FooterHeader>
                    <FooterItem>
                        <Social to='/'>
                        <Links1 />
                        <Links2 />
                        <Links3 />
                        <Links4 />
                        </Social>
                    </FooterItem>
                </FooterMenu>
          </FooterContainer>
          <FooterBottom>
                    &copy; ANNI. All Rights Reserved.
                </FooterBottom>
      </Foooter>
    </>
  )
}

export default Footer
