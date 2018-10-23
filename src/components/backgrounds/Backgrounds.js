import React, { Component } from 'react'
import Background from '../background/Background'
import _ from 'lodash'

class Backgrounds extends Component {
    constructor(props){
        super(props)

        this.state = {
            backgrounds : [
                {'id':'light-blue','pathname':'/','position':'center bottom', 'image':'light-blue.jpg'},
                {'id':'pink','pathname':'/stories/1982','position':'bottom center', 'image':'pink.jpg'},
                {'id':'pink','pathname':'/stories/1982','position':'bottom center', 'image':'pink.jpg'},
                {'id':'yellow','pathname':'/stories/1986','position':'bottom center', 'image':'2016.jpg'},
                {'id':'pink','pathname':'/stories/1992','position':'bottom center', 'image':'red.jpg'},
                {'id':'purple','pathname':'/stories/1997','position':'bottom center', 'image':'purple.jpg'},
                {'id':'green','pathname':'/stories/2000','position':'bottom center', 'image':'green.jpg'},
                {'id':'dark-blue','pathname':'/stories/2001','position':'bottom center', 'image':'dark-blue.jpg'},
                {'id':'blue','pathname':'/stories/2004','position':'bottom center', 'image':'blue.jpg'},
                {'id':'index','pathname':'/stories/2007','position':'bottom center', 'image':'index.jpg'},
                {'id':'pink','pathname':'/stories/2018','position':'bottom center', 'image':'pink.jpg'},
                {'id':'gold','pathname':'/experience','position':'bottom center', 'image':'gold.jpg'},
                {'id':'green','pathname':'/projects','position':'bottom bottom', 'image':'green.jpg'}
            ]
        }
    }

    render(){
        const backgrounds = this.state.backgrounds
        const currentBackground =_.find(backgrounds, {'pathname' : this.props.location.pathname})
        const currentBackgroundID = currentBackground.id;
        console.loc(this.props.location.pathname)

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
