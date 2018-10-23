import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/containers/stories/story-1997.css'

class S1997 extends Component {

    render(){

        return(
            <div id="story" className="story story-1997">
                <Motion defaultStyle={{opacity:0, scale: 0.5}} style={{opacity: spring(1), scale: spring(1)}}>
                    {value=>
                        <div style={{opacity: value.opacity, transform:`scale(${value.scale})`}}>
                            <div className="content layer" data-depth="0.30">
                                <div className="heading">
                                    <h1 className="year">1997</h1>
                                    <div className="label">I learned how to touch type</div>
                                    <div className="description">I learned how to touch type on an Intel 80386, also known as the i386, or just 386386 computer my mother baught using a software known as Mavis beacon. This experience has helped me immensely even uptill date, I can type at speed when coding widthout looking the computer key board.</div>
                                </div>
                            </div>
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}

export default S1997
