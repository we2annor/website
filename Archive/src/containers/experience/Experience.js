import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Motion, spring } from 'react-motion'
import { showShadow, hideShadow } from '../../lib/app/actions'
import '../../styles/containers/experience.css'

class Experience extends Component {

    handleScroll = (e) => {
        if(e.scrollTop > 10){
            this.props.showShadow()
        } else {
            this.props.hideShadow()
        }
    }

    render(){
        return(
            <Scrollbars className="page experience" style={{width:'100%',height:'100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide>
                <Motion defaultStyle={{opacity: 0, scale: 0.5, height: 500}} style={{opacity: spring(1), scale: spring(1), height: spring(1)}}>
                    {value=>

                        <div>
                            <div className="header">

                                <div className="content" style={{opacity: value.opacity, transform: `scale(${value.scale})`}}>
                                    <div className="inner">
                                        <h1 className="title">My Experience</h1>
                                        <div className="subtitle">UX - Development</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{width:1, height:value.height}}></div>

                            <div className="page-card">

                                <section className="design">

                                    <div className="heading group left">
                                        <div className="title group">
                                            <div className="number">01</div>
                                            <div className="label">UX</div>
                                        </div>
                                    </div>

                                    <div className="content group">

                                        <div className="image">
                                            <img src="/images/experience/website-mockup.jpg" alt="mock up"/>
                                        </div>

                                        <div className="text">
                                            <div className="inner">
                                                <h3>User Experience</h3>
                                                <p>Before designing the first pixel, I always consider who the end user is, what drives them, and what their goals are. Understanding the user helps to drive every business decision and design concept. Once a product has been built, I find it important to continuously validate my decisions by gathering feedback directly from users to help direct changes and new features.</p>
                                                <h3>Design</h3>
                                                <p>I obsess over every detail of my designs making sure every aspect has been well thought out. I am what I refer to as an object-oriented designer. I think about how each component I design will translate on various devices, from mobile and tablet, to desktop and television, and how they fit into the overall application.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="development">

                                    <div className="heading group right">
                                        <div className="title group">
                                            <div className="number">02</div>
                                            <div className="label">Development</div>
                                        </div>
                                    </div>

                                    <div className="content group">

                                        <div className="image">
                                            <img src="/images/experience/mac.jpg" alt="mac"/>
                                        </div>

                                        <div className="text">
                                            <div className="inner">
                                                <h3>Websites</h3>
                                                <p>I've been building websites since I was 16. Back then, Flash was the prevailing / cool technology to use in building websites. On the advent of the iPad, Flash quickly became obsolete and was reduced to being used to build advertising units as opposed to full-fledged websites. The landscape quickly changed from users accessing websites only on desktops, to now accessing them from various devices such as mobiles, tablets, televisions, refrigerators and more. This is when we welcomed HTML5, allowing us to create websites for almost every type of device imaginable.</p>
                                                <h3>Apps</h3>
                                                <p>By using libraries such as Cordova and Ionic, I’m able to use the same toolset I use to build websites, to build mobile applications. More recently, however, I have been using React Native to build mobile applications.</p>
                                                <h3>Servers</h3>
                                                <p>I love JavaScript, and thanks to Node.js, I’m able to leverage my JavaScript knowledge to build fast, reliable backend services and APIs to power my applications. Using React on the server also allows me to drastically improve the load times of my applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="dev-list group">
                                    <div className="lists group">

                                        <ul className='list'>
                                            <li className="title">Layout / Style</li>
                                            <li>HTML (5)</li>
                                            <li>CSS (3)</li>
                                            <li>Sass</li>
                                            <li>Less</li>
                                            <li>Bootstrap</li>
                                            <li>Foundation</li>
                                        </ul>

                                        <ul className='list'>
                                            <li className="title">Libraries / frameworks</li>
                                            <li>React / Flux / Redux</li>
                                            <li>AngularJs</li>
                                            <li>JQuery</li>
                                            <li>Hammer.js</li>
                                        </ul>

                                        <ul className='list'>
                                            <li className="title">Database / data</li>
                                            <li>MySQL</li>
                                            <li>JSON</li>
                                            <li>XML</li>
                                        </ul>

                                        <ul className='list'>
                                            <li className="title">On the server</li>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                        </ul>

                                        <ul className='list'>
                                            <li className="title">Version control</li>
                                            <li>GitHub</li>
                                            <li>Bitbucket</li>
                                        </ul>

                                        <ul className='list'>
                                            <li className="title">Package managers</li>
                                            <li>NPM</li>
                                            <li>Bower</li>
                                            <li>Homebrew</li>
                                        </ul>

                                    </div>
                                </section>
                            </div>
                        </div>
                    }
                </Motion>
                <Footer />
            </Scrollbars>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        app: state.App
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        showShadow : () => {
            dispatch(showShadow())
        },
        hideShadow : () => {
            dispatch(hideShadow())
        }
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(Experience)
