import React from 'react'
import { Route } from 'react-router'
import Home from '../containers/home/Home'
import Experience from '../containers/experience/Experience'
import Projects from '../containers/projects/Projects'
import AppComponent from '../components/AppComponent'
import Stories from '../containers/stories/Stories'

const createRoute = () => {
    return(
        <AppComponent>
            <Route exact path="/" component={Home}/>
            <Route path="/stories" component={Stories}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/projects" component={Projects}/>
            <Route path=":year" component={Stories}>
            </Route>
        </AppComponent>
    )
}

const Routes = createRoute
export default Routes
