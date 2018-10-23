import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'
import { request } from '../../lib/app/actions'
import '../../styles/containers/stories/story-1982.css'

class S1982 extends Component {
            next(){
                this.props.request('/story/1986')
            }

    render(){

        return(
            <div id="story" className="story story-1982">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">1982</h1>
                                    <div className="label">My Story</div>
                                    <div className="description">Born in Kumasi, Ghana, my passion for creativity and design was crafted from my love for drawing. I loved to draw as a child.</div>
                                    <div className="btn btn-outline next" onClick={this.next.bind(this)}>NEXT</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apps: state.App
    }
}

const mapDistpatchToProps = (dispatch) => {
    return{
        request: (path) => {
            dispatch(request(path))
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(S1982)
