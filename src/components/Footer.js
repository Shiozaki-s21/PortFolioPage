import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    {/*link icons*/}
                    <li><a href="https://www.facebook.com/profile.php?id=100027270064972" className="fa-facebook-official"><span className="label">Facebook</span></a></li>
                    <li><a href="https://github.com/Shiozaki-s21" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/takahashi-kazuya-520347164/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://medium.com/@KazuYaTaka" className="icon alt fa-medium"><span className="label">Medium</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019 Kazuya Takahashi</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
