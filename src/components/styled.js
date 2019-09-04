import styled from 'styled-components'

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
	// color: '#fff';
	text-shadow: 2px 1px 1px rgba(0, 0, 0, 1);
	`

export const SubTitle = styled.p`
  font-family: 'VT323', monospace;
  color: #fff
  `
export const MountColor = styled.span`
	background-color: rgba(120, 120,120, 0.7),
`


export const SkillBadge = styled.span`
  font-size: 4em;
  color: ${props => props ? props.color : 'palevioletred'};
`
