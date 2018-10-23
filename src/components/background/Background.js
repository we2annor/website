import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import '../../styles/components/background.css'

class Background extends Component {
    constructor(props){
        super(props)

        this.state = {
            active: false,
            loaded: false
        }
    }

    onLoad = () => {
        this.setState({loaded: true})
    }

    getImage = () => {
        var image = ''
        if(this.props.background.image){
            image = `/images/backgrounds/${this.props.background.image}`
        }
        return image
    }

    render(){
        const style = {
            opacity: 0,
            imgOpacity: 0
        }

        const active = (this.props.background.id === this.props.currentBackgroundID)
        if(active){
            style.opacity = 1
        }

        if(this.state.loaded){
            style.imgOpacity = 1
        }

        return(
            <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(style.opacity, {stiffness:80}) }}>
                {value=>
                    <div className="background" data-background={this.props.background.id} style={{opacity:value.opacity}}>
                        <div className="image" style={{opacity:value.imgOpacity, backgroundImage: `url(${this.getImage()})`, backgroundPosition: this.props.background.position}}></div>
                        <img src={this.getImage()} onLoad={this.onLoad} alt="current page background"/>
                    </div>
                }
            </Motion>
        )
    }
}

export default Background
