import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-2007.css'

class S2007 extends Component {

    render(){

        return(
            <div id="story" className="story story-2007">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">2007</h1>
                                    <div className="label">South Bank University</div>
                                    <div className="description">In 2007 I gained admission into London South Bank University to read Computer Science. It was a nice experience to have, I gained an in depth practical knowlodge into the theory and the practical aspect of computer science. I also enhanced my inter relational Skills.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S2007
