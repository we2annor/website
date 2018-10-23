import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class S1992 extends Component {
            next(){

            }

    render(){

        return(
            <div id="story" className="story story-1992">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">1992</h1>
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

export default S1992
