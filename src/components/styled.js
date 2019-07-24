import styled from 'styled-components'
// import WebFont from 'webfontloader'
//
// WebFont.load({
//   google:{
//     families:['VT323','monospace']
//   }
// });
// ;

// This will make sure WebFont.load is only used in the browser.
if (typeof window !== 'undefined') {
  let WebFont = require('webfontloader')
  WebFont.load({
    google: {
      families: ['VT323', 'monospace'],
    },
  })
}

export const Title = styled.h1`
	//TODO: To add animation
	font-family: 'VT323', monospace;
	color: '#0ff';
	text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);`

export const SubTitle = styled.p`
  font-family: 'VT323', monospace;
  color: #fff
  `

export const SkillBadge = styled.span`
  font-size: 4em;
  color: ${props => props ? props.color : 'palevioletred'};
`

export const BackGroundImage = styled.p`
  background-image: "../assets/images/BackImage.png"
`