import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Motion, spring } from 'react-motion'
import { hideNavigation, showNavigation } from '../../lib/navigation/actions'
import { hideShadow, showShadow } from '../../lib/app/actions'
import '../../styles/containers/home.css'
import classNames from 'classnames'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            navigation : {
                visible : this.props.navigationReducer.visible
            }
        }
    }

    handleScroll = (e) => {
        if(e.scrollTop > 10){
            this.props.showShadow()
        } else{
            this.props.hideShadow()
        }
    }

    render(){
        const mainLinkClasses = classNames({
            'main-links' : true,
            box : true,
            'navigation-visible' : this.state.navigation.visible
        })

        var style = {
            opacity: 1,
            scale: 1
        }

        if(this.state.navigation.visible) {
            style = {
                opacity: 0,
                scale : 0.9
            }
        }

        return(
            <Scrollbars className="page home" style={{width: '100%', height: '100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide >
                <Motion defaultStyle={{opacity:0,scale:0.5}} style={{opacity: spring(style.opacity), scale: spring(style.scale)}}>
                    { value=>

                        <div className={mainLinkClasses} style={{opacity: value.opacity, transform: `scale(${value.scale})`} }>
                            <div className="box-middle">

                                <div className="bio">
                                    <div className="content">
                                        <div>FrontEnd Developer</div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className="navs">

                                    <Link className="link group my-history" to="stories">
                                        <div className="link-content group">
                                            <div className="number">01</div>

                                            <div className="title">
                                                <div className="label">My Story</div>
                                                <div className="description">From 2000 - Today</div>
                                            </div>

                                        </div>
                                    </Link>

                                    <Link className="link my-experience" to="experience">
                                        <div className="link-content group">
                                            <div className="number">02</div>

                                            <div className="title">
                                                <div className="label">My Experience</div>
                                                <div className="description">UX - Development</div>
                                            </div>

                                        </div>
                                    </Link>

                                    <Link className="link my-projects" to="projects">
                                        <div className="link-content group">
                                            <div className="number">03</div>

                                            <div className="title">
                                                <div className="label">My Projects</div>
                                                <div className="description">Crypto Stop</div>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

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
    return {
        app: state.App,
        navigationReducer : state.NavigationReducer
    }
}

const mapDistpatchToProps = (dispatch) => {
    return{
        hideNavigation: () => {
            dispatch(hideShadow())
        },

        showNavigation : () => {
            dispatch (showShadow())
        },
        showShadow : () => {
            dispatch(showShadow())
        },
        hideShadow : () => {
            dispatch(hideShadow())
        }
    }
}

export default connect(mapStateToProps,mapDistpatchToProps)(Home)
