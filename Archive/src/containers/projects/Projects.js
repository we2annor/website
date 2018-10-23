import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import { showShadow, hideShadow }  from '../../lib/app/actions'
import '../../styles/containers/projects.css'
import Footer from '../../components/footer/Footer'

class Projects extends Component {

    handleScroll = (e) => {
        if(e.scrollTop > 10){
            this.props.showShadow()
        }else {
            this.props.hideShadow()
        }
    }

    render(){
        return(
            <Scrollbars className="page projects" style={{width:'100%',height:'100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide>
                <Motion defaultStyle={{opacity:0, scale:0.5, height: 500}} style={{opacity: spring(1), scale: spring(1), height: spring(1)}}>
                    {value=>
                        <div>
                            <div className="header">
                                <div className="content" style={{opacity:value.opacity, transform:`scale(${value.scale})`}}>
                                    <div className="inner">
                                        <h1 className="title">My Project</h1>
                                        <div className="subtitle">Latest work over the past few years</div>
                                    </div>

                                </div>
                            </div>

                            <div style={{width:1,height:value.height}}></div>

                            <div className="page-card">

                                <section className="crypto">
                                    <div className="heading group left">
                                        <div className="title group">
                                            <div className="number">01</div>
                                            <div className="label">CryptoStop</div>
                                        </div>
                                    </div>

                                    <div className="content group">
                                        <div className="image">
                                            <img src="/images/projects/unubo.jpg" alt="crypto"/>
                                        </div>

                                        <div className="text">
                                            <div className="inner">
                                                <h3>Test Heading goes here</h3>
                                                <p>And the description here</p>
                                                <a href="" className="btn btn-primary">VIEW PROJECT</a>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section className="moto">

                                    <div className="heading group right">
                                        <div className="title group">
                                            <div className="number">02</div>
                                            <div className="label">MOTO</div>
                                        </div>
                                    </div>

                                    <div className="content group">

                                        <div className="image">
                                            <img src="/images/projects/moto.jpg" alt="moto"/>
                                        </div>

                                        <div className="text">
                                            <div className="inner">
                                                <h3>Car management made simple</h3>
                                                <p>In 2015, after purchasing a car, I found that there was no simple way to manage details about my car. I then designed and built an app in my spare time and released it on the App Store.</p>
                                                <p>MOTO allows you to view your tax and MOT expiry dates, review your MOT history and check your vehicle's mileage history.</p>

                                                <div className="app-store">
                                                    <a href="https://itunes.apple.com/gb/app/moto-app/id1076608318" target="_blank" rel=""><img src="/images/app-store.png" alt="app store"/></a>
                                                </div>
                                            </div>
                                        </div>

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
    return{
        showShadow : () => {
            dispatch(showShadow())
        },
        hideShadow : () => {
            dispatch(hideShadow())
        }
    }
}

export default connect(mapStateToProps,mapDistpatchToProps)(Projects)
