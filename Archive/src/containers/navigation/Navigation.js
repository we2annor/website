import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Motion, spring } from 'react-motion'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { showNavigation, hideNavigation, sayName } from '../../lib/navigation/actions'
import { showShadow, hideShadow } from '../../lib/app/actions'
import '../../styles/containers/navigation.css'

class Navigation extends Component {
    constructor(props){
        super(props)

        this.state = {
            visible: this.props.navigationReducer.visible,
            hidden : true
        }
    }

    componentWillMount = () => {
    }

    onRest = () => {
         if(!this.props.navigationReducer.visible){
             this.setState({hidden: true})
         }
    }

    onLinkClicked = () => {
        this.props.hideNavigation()
    }

    handleScroll = (e) => {
        if(e.scrollTop > 10 ){
            this.props.showShadow()
        }else {
            this.props.hideShadow()
        }
    }


    render(){
        var menuClasses = classNames({
             hidden: this.props.navigationReducer.hidden,
            'menu-visible': this.props.navigationReducer.visible
        })

        var style = {
             contentLeft : -100,
             opacity : 0
        }

        if(this.props.navigationReducer.visible){
            style = {
                 contentLeft : 0,
                 opacity : 1
            }
        }

        const pages = this.props.navigationReducer.pages.map((page) => {
            var active = (page.path === this.props.pathname)
            if(page.path !== '/'){
                active = (this.props.pathname.indexOf(page.path) !== -1 ? true : false )
            }
            const linkClasses = classNames({
                'link' : true,
                'active' : active
            })
            page.classes = linkClasses
            return page;
        })

        return(
            <div>
                <Motion defaultStyle={{opacity: 0, contentLeft: -100}} style={{contentLeft: spring(style.contentLeft), opacity: spring(style.opacity)}} onRest={this.onRest.bind(this)}>
                    { value=>
                        <div id="Menu" className={menuClasses} style={{opacity: value.opacity}}>
                            <div className="content" style={{left: value.contentLeft}}>
                                <Scrollbars className="content-outer" style={{width: '100%', height: '100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide>
                                    <div className="box">
                                        <nav className="box-middle">
                                            <ul className="links">
                                                {
                                                    pages.map((page, index) => {
                                                        return(
                                                            <Link key={index} className={page.classes} to={page.path} onClick={this.onLinkClicked.bind(this)}>{page.title}</Link>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                </Scrollbars>
                            </div>

                            <div className="line" style={{left: value.contentLeft}}>
                                <img className="shadow" src="/images/menu/shadow.png" alt="border line"/>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        app : state.App,
        navigationReducer : state.NavigationReducer
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        showNavigation : () => {
            dispatch(showNavigation())
        },
        hideNavigation : () => {
            dispatch(hideNavigation())
        },
        sayName : (name) => {
            dispatch(sayName(name))
        },
        showShadow : () => {
            dispatch(showShadow())
        },
        hideShadow : () => {
            dispatch(hideShadow())
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Navigation)
