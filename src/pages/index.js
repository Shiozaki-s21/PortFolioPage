import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import {SkillBadge} from '../components/styled'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import springIcon from '../assets/images/springio-ar21.svg'
import locatterImage from '../assets/images/LocatterImage.png'

// skill badge
import devicon from 'devicon/devicon.css'
import deviconColors from 'devicon/devicon-colors.css'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Kazuya Takahashi - my portfolio";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                {/*section for WHO AM I*/}
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            {/*TODO: To replace here*/}
                            <p>I'm Back-end Engineer worked in Japan and studying and living in Vancouver right now</p>
                            <p></p>
                        </div>
                    </div>
                </section>
                {/*section for What IS MY SKILLS*/}
                {/*TODO:Back Ground Color must be white or bright color*/}
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><SkillBadge><i className="devicon-java-plain-wordmark colored"></i></SkillBadge></li>
                                <li><SkillBadge>
                                    <svg viewBox="0 0 128 128">
                                        <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path><path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path><path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path><path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path><path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path><path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
                                    </svg>
                                </SkillBadge></li>
                                <li><SkillBadge className="devicon-javascript-plain colored"></SkillBadge></li>
                                <li><img src={springIcon} width={64} height={48}/></li>
                                <li><SkillBadge className="devicon-c-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-mysql-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-android-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-react-original-wordmark colored"></SkillBadge></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>My Skills</h2>
                                <p>I have been a professional back-end developer for almost 3 years.</p>
                                <p>And now, I study Mobile development in collage and front-end development by my self.</p>
                            </header>
                            {/*TODO:Write description about my own skills */}
                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                            {/*<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>*/}
                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                        </div>
                    </div>
                </section>

                {/*section for MY PRODUCTS*/}
                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>My Products</h2>
                            </header>
                            <div className="col-4">
                                <span className="image fit"><img src={locatterImage} alt="" /></span>
                                <h3> Locatter </h3>
                                <p>This is the new style SNS!.</p>
                                <ul className="actions">
                                    <li><a href=" https://locatter-0.flycricket.io/?t=1567020499" className="button">More</a></li>
                                </ul>
                            </div>
                        </div>

                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic02} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic03} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic04} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;