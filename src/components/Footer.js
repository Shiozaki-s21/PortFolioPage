import React from 'react'

import gituhb from '../assets/images/github.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import medium from '../assets/images/medium.png'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    {/*link icons*/}
                    <li><a href="https://www.facebook.com/profile.php?id=100027270064972"><img src={facebook} height={30} width={30}/></a></li>
                    <li><a href="https://github.com/Shiozaki-s21"><img src={gituhb} height={30} width={30} /></a></li>
                    <li><a href="https://www.linkedin.com/in/takahashi-kazuya-520347164/"><img src={linkedin} height={30} width={30} /></a></li>
                    <li><a href="https://medium.com/@KazuYaTaka" ><img src={medium} height={30} width={30} /></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019 Kazuya Takahashi</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
