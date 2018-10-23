import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-1986.css'

class S1986 extends Component {
    constructor(){
        super()
        
    }

    render(){

        return(
            <div id="story" className="story story-1986">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">1986</h1>
                                    <div className="label">My Story</div>
                                    <div className="description"></div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S1986
