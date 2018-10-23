import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import  Hammer  from 'react-hammerjs'
import { connect } from 'react-redux'
import _ from 'lodash'
import keydown from 'react-keydown'
import { change, request } from '../../lib/app/actions'
import Footer from '../../components/footer/Footer'
import '../../styles/containers/stories/stories.css'
import store from '../../store'

import S1982 from './Story-1982'
import S1986 from './Story-1986'
import S1992 from './Story-1992'


class Stories extends Component {
    constructor(props){
        super(props)

        this.state = {
            showShadow : false,
            stories : [
                {'year': '1982','component': <S1982/>},
                {'year': '1986','component': <S1986/>},
                {'year': '1992','component': <S1992/>}
            ],
            year: '',
            storiesIndex: 0,
            story: {}
        }
    }

    componentWillMount = () => {
        this.props.change(this.onPageChange);
    }

    onPageChange = () => {
        const scroll = document.getElementById('stories').firstChild;
        scroll.scrollTop = 0
    }


    handleScroll = (e) => {
        if(e.scrollTop > 10){
            this.props.showShadow()
        } else {
            this.props.hideShadow()
        }
    }

    previous(){
        var index = this.getStoriesIndex() - 1
        if(index >= 0){
            const story = this.state.stories[index]
            this.props.request('/story/' + story.year)
        }
    }

    next(){
        var index = this.getStoriesIndex() + 1
        if(index != this.state.stories.length){
            const story = this.state.stories[index]
            this.props.request('/story/' + story.year)
        }
        console.log(this.props.app.history)
    }

    getYear = () => {
        var year = '1982'
        if(this.props.app.pages){
            if(this.props.app.pages.hasOwnProperty('year')){
                year = this.props.app.pages.year
            }
        }
        return year
    }

    getStoriesIndex = () => {
        const index = _.findIndex(this.state.stories,{'year': this.getYear()})
        return index
    }

    getStory = () => {
        return _.find(this.state.stories, {'year': this.getYear()})
    }

    handleSwipe = (e) => {
        if(e.direction > 2){
            this.next()
        } else {
            this.previous()
        }
    }



    render(){
        const year = this.getYear()
        const storiesIndex = this.getStoriesIndex()
        const story = this.getStory()

        const styles = {
            next : {
            },
            previous : {
            },
            nav : {
            }
        }

        if(storiesIndex == 0){
            styles.nav.display =  'none'
        }

        if(storiesIndex + 1 == this.state.stories.length){
            styles.next.display = 'none'
        }

        console.log(this.getStoriesIndex() + 1)
        console.log(this.getStoryIndex)
        console.log(this.state.stories.length)
        //console.log(this.props.change(this.props.location.pathname))

        return(
                <Scrollbars id="stories" className="page stories" style={{width:'100%',height:'100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide>
                    <div>
                        {story.component}
                    </div>

                    <div className="nav" style={styles.nav}>
                        <div className="previous" style={styles.previous} onClick={this.previous.bind(this)}>
                            <img src="/images/stories/arrow-left.png" alt="previous btn"/>
                        </div>

                        <div className="next" style={styles.next} onClick={this.next.bind(this)}>
                            <img src="/images/stories/arrow-right.png" alt="next btn"/>
                        </div>
                    </div>

                    <Footer />
                </Scrollbars>

            // <Scrollbars className="page history" style={{width: '100%', height: '100%'}} onScrollFrame={this.handleScroll.bind(this)} autoHide>
            //     <Motion defaultStyle={{opacity: 0, scale: 0.5, height: 500}} style={{opacity: spring(1), scale: spring(1), height: spring(1)}}>
            //         {   value=>
            //             <div id="History" className="history" style={{opacity: value.opacity, transform: `scale(${value.scale})`}}>
            //                 <div className="content layer" data-depth="0.30">
            //                     <div className="heading">
            //                         <h1 className="year">2000</h1>
            //                         <div className="label">My Story</div>
            //                     </div>
            //
            //                     <div style={{width: 1, height: value.height}}></div>
            //
            //                     <div className="description">Born in Kumasi, Ghana, my passion for creativity and design was crafted
            //                         from my love for drawing. I loved to draw as a child.
            //                     </div>
            //
            //                     <div className="description">This love of art was transfered unto computers. I started drawing and painting on computers with a software called Coral
            //                     draw which was very porpular in the 90s, on a 386 computer my mother bought me. It was on this computer that I gained my profound knowledge of how to touch type with a software
            //                     called Mavis Beacon. </div>
            //
            //                     <div className="description">After hight school I took on a diploma course in IT where I accomplished my first knowledge in computer programming. The language I started with was Q-basic.
            //                     And with this my first project was created.</div>
            //
            //                     <div className="description">I further went on to expand my skills in creating websites by taking a course in dreamweaver and flash both in basic and advanced levels. I worked for a tourism company in Ghana for a
            //                     year, designing letter heads and logos for the company.</div>
            //
            //                     <div className="description">I moved to United Kingdom in 2003, and while here I embraced the opportunity to learn more different scripting languages including flash ActionScript, PHP, JavaScript and other frameworks for
            //                     developing web applications.</div>
            //                 </div>
            //             </div>
            //         }
            //     </Motion>
            //
            //     <Footer />
            // </Scrollbars>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        app: state.App,
        nav: state.NavigationReducer
    }
}

const mapDistpatchToProps = (dispatch) => {
    return{
        change: (location) => {
            dispatch(change(location))
        },
        request: (path) => {
            dispatch(request(path))
        }
    }
}

export default connect(mapStateToProps,mapDistpatchToProps)(Stories)
