import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-2004.css'

class S2004 extends Component {

    render(){

        return(
            <div id="story" className="story story-2004">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">2004</h1>
                                    <div className="label">Moved from Ghana to England</div>
                                    <div className="description">I moved to England, United Kingdom.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S2004
