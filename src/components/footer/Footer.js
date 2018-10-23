import React, { Component } from 'react'
import EmailFilled from './socialMediaSVG/EmailFilled'
import LinkedIn from './socialMediaSVG/LinkedIn'
import Twitter from './socialMediaSVG/Twitter'
import { connect } from 'react-redux'
import  classNames  from 'classnames'
import '../../styles/components/footer.css'

class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            menu: {
                visible: this.props.nav.visible
            }
        }
    }
    render(){

        let style = {
            opacity: 1,
            bottom: 0
        }

        if(this.state.menu.visible){
            style = {
                opacity: 0
            }
        }

        const footerClasses = classNames({
            'menu-visible' : this.props.nav.visible
        })

        return(
            <footer className={footerClasses}>
                <div className="links group">
                    <a href="mailto:contact@ernestannor.com">
                        <div className="link mail">
                            <EmailFilled width="35" height="35" color="#e8e8e8"/>
                        </div>
                    </a>

                    <a href="https://twitter.com/we2annor">
                        <div className="link twitter">
                            <Twitter width="35" height="35" color="#e8e8e8"/>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/ernest-annor-3b76667/" target="_blank" rel="noopener noreferrer">
                        <div className="link linkedIn">
                            <LinkedIn width="35" height="35" color="#e8e8e8"/>
                        </div>
                    </a>
                </div>
                <div className="line line-h"></div>
                <div className={{opacity: style.opacity}}></div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        nav: state.NavigationReducer
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps,mapDistpatchToProps)(Footer)
