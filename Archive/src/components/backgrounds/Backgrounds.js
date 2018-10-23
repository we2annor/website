import React, { Component } from 'react'
import Background from '../background/Background'
import _ from 'lodash'

class Backgrounds extends Component {
    constructor(props){
        super(props)

        this.state = {
            backgrounds : [
                {'id':'blue','pathname':'/','position':'center bottom', 'image':'index.jpg'},
                {'id':'white','pathname':'/stories','position':'bottom center', 'image':'home.jpg'},
                {'id':'pink','pathname':'/stories/1982','position':'bottom center', 'image':'home.jpg'},
                {'id':'yellow','pathname':'/stories/1986','position':'bottom center', 'image':'home.jpg'},
                {'id':'orange','pathname':'/stories/1992','position':'bottom center', 'image':'home.jpg'},
                {'id':'red','pathname':'/experience','position':'bottom center', 'image':'about.jpg'},
                {'id':'green','pathname':'/projects','position':'bottom bottom', 'image':'project.jpg'}
            ]
        }
    }

    render(){
        const backgrounds = this.state.backgrounds
        const currentBackground =_.find(backgrounds, {'pathname' : this.props.location.pathname})
        const currentBackgroundID = currentBackground.id

        console.log(this.props.location.pathname)

        return(
            <div className="backgrounds">
                <div className="layer" data-depth="0.10">
                    {
                        backgrounds.map((background, index)=> {
                            return <Background key={index} background={background} currentBackgroundID={currentBackgroundID}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Backgrounds
