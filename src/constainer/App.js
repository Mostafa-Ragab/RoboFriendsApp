import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { Component } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots:users}));
    }
    onchangesearch = (event) => {
        this.setState({searchfield:event.target.value })
    }
    render() {
        const{searchfield,robots}=this.state;
        const filterdRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return!robots.length ?
        <h1>loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchchange={this.onchangesearch}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filterdRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
}


export default App;

