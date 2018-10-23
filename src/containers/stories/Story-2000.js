import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-2000.css'

class S2000 extends Component {

    render(){

        return(
            <div id="story" className="story story-2000">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">2000</h1>
                                    <div className="label">My first Coding Experience</div>
                                    <div className="description">After high school, I took a diploma course in Information Technology. It was called IMIS (Institute for the Management of Information Systems). Where I had my first programming experience. Q-basic was the programming language I started with. Blings and colors were the cool thing we use to enjoy when coding. That was when we write psuedocodes before any coding is done on a project.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S2000
