import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Head from './head/'
import Backgrounds from './backgrounds/Backgrounds'
import Navigation from '../containers/navigation/Navigation'
import classNames from 'classnames'
import '../styles/containers/pages.css'

class AppComponent extends Component {
    render(){

        const classes = classNames({
            'menu-visible' : this.props.navigationReducer.visible
        })

        const pageClasses = classNames({
            'menu-visible' : this.props.navigationReducer.visible
        })

        return(
            <div className={classes} data-page={this.props.location.pathname}>
                <Backgrounds location={this.props.location} />
                <Head />

                <div id="pages" className={pageClasses}>
                    {this.props.children}
                </div>

                <Navigation pathname={this.props.location.pathname} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        navigationReducer: state.NavigationReducer
    }
}

const mapDistpatchToProps = () => {
    return{

    }
}

const AppComponentWithRouter = withRouter(AppComponent)
export default connect(mapStateToProps, mapDistpatchToProps)(AppComponentWithRouter)
