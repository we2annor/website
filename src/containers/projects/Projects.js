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
                                            <img src="/images/projects/cryptoStop.jpg" alt="crypto"/>
                                        </div>

                                        <div className="text">
                                            <div className="inner">
                                                <h3>Buy and sell your cryptocurrencies.</h3>
                                                <p>CryptoStop is a personal project I designed and developed when I had time to spare in 2017.</p>
                                                <p> On this website you can check the latest rate of your favourite cryptocurrency. You can also buy and / or sell your cryptocurrencies on here. </p>
                                                <a href="https://cryptostop.co.uk" className="btn btn-primary">VIEW PROJECT</a>
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
                                            </div>
                                        </div>

                                    </div>

                                </section>

                                <section className="get-in-touch">
                                    <a className="btn btn-primary" href="mailto:contact@ernestannor.com">GET IN TOUCH</a>
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
