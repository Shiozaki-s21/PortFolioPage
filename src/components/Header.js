import React from 'react'
import {Title, SubTitle} from './styled'

import BackImage from '../assets/images/BackImage.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header" style={{ backgroundImage: `url(${BackImage})`, backgroundRepeat: 'space',   backgroundSize: 'cover' }}>
                <div className="inner">
                    {/* TODO put on the my icon here */}
                    {/*<span className="icon major fa-cloud"></span>*/}
                    <Title>Hi, I'm <strong>Kazuya Takahashi</strong></Title>
                    <SubTitle>Back-End Engineer/
                        Mobile Engineer</SubTitle>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
