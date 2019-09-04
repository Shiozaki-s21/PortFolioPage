import React from 'react'
import { Title, SubTitle, MountColor } from './styled'
import BackImage from '../assets/images/BackImage.png'

class Header extends React.Component {
  render() {
    return (
      <section id="header" style={{
        backgroundImage: `url(${BackImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
      }}>
        <Title><span style={{ backgroundColor: ' rgba(120, 120,120, 0.7)' }}> Hi, I'm <strong>Kazuya Takahashi</strong></span></Title>
        <SubTitle><span style={{ backgroundColor: ' rgba(120, 120,120, 0.7)' }}><strong><MountColor>Back-End/
          Mobile Engineer</MountColor></strong></span></SubTitle>
      </section>
    )
  }
}

export default Header
