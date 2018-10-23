import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showNavigation, hideNavigation, toggleNavigation } from '../../lib/navigation/actions'
import classNames from 'classnames'
import '../../styles/components/head.css'
import '../../utils/hamburger.css'

class Head extends Component {
    constructor(props){
        super(props)

        this.state = {
            active : false,
            visible: this.props.navigationReducer.visible
        }
    }

    onLogoClick = () => {
        this.props.hideNavigation()
    }

    toggleMenu = () => {
        this.props.toggleNavigation()
    }

    render(){
        const headerClasses = classNames({
            'menu-visible' : this.props.navigationReducer.visible
        })

        const shadowClasses = classNames({
            'shadow' : true,
            'show' : this.props.app.shadow
        })

        const menuLinkClasses = classNames({
            'c-hamburger': true,
            'c-hamburger--htx': true,
            'is-active': this.props.navigationReducer.visible
        })

        return(
            <div>
                <header className={headerClasses}>
                    <div className={shadowClasses}>
                        <img src="/images/header/shadow.png" alt="header shadow"/>
                    </div>
                    <div className="menu-link" onClick={this.toggleMenu.bind(this)}>
                        <button className={menuLinkClasses}>
                            <span></span>
                        </button>
                    </div>

                    <div className="logo">
                        <div className="title" onClick={this.onLogoClick.bind(this)}>
                            <Link className="name" to="/">ERNEST ANNOR</Link>
                        </div>
                    </div>
                    <div className="line line-h"></div>
                </header>
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
    return{
        showNavigation : () => {
            dispatch(showNavigation())
        },
        hideNavigation : () => {
            dispatch(hideNavigation())
        },
        toggleNavigation : () => {
            dispatch(toggleNavigation())
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Head)
