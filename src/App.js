import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Puzzle from "./15puzzleComponents/puzzle";
import Graph from "./Graph/graph";

class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    <Route path='/prime' component={Seive}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/nqueen' component={Queen}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/15puzzle' component={Puzzle}/>
                    <Route path='/graph' component={Graph}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
