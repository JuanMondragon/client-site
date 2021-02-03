import React from "react"
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            PHOTO-JAY
          </SocialLogo>
          <WebsiteRights> PHOTO-JAY {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                  <FaYoutube/>
              </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
