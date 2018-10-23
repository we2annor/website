import React, { Component } from 'react'
import Email from './socialMediaSVG/Email'
import LinkedIn from './socialMediaSVG/LinkedIn'
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

        var style = {
            opacity: 1,
            bottom: 0
        }

        if(this.state.menu.visible){
            opacity: 0
        }
        
        const footerClasses = classNames({
            'menu-visible' : this.props.nav.visible
        })

        return(
            <footer className={footerClasses}>
                <div className="links group">
                    <a href="mailto:contact@ernestannor.com">
                        <div className="link mail">
                            <Email width="40" height="40" color="#e8e8e8"/>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/ernest-annor-3b76667/" target="_blank">
                        <div className="link linkedIn">
                            <LinkedIn width="40" height="40" color="#e8e8e8"/>
                        </div>
                    </a>
                </div>
                <div className="line line-h"></div>
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
