import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-2018.css'

class S2018 extends Component {

    render(){

        return(
            <div id="story" className="story story-2018">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">2018</h1>
                                    <div className="label">What's next</div>
                                    <div className="description">Why not get in touch, to see what we can add to the list!</div>
                                    <a className="btn btn-primary get-in-touch" href="mailto:contact@ernestannor.com">GET IN TOUCH</a>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S2018
