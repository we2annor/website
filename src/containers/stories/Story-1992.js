import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-1992.css'

class S1992 extends Component {

    render(){

        return(
            <div id="story" className="story story-1992">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">1992</h1>
                                    <div className="label">Moved from Sunyani back to Kumasi</div>
                                    <div className="description">Moved from Sunyani back to Kumasi. where I started drawing at school.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S1992
