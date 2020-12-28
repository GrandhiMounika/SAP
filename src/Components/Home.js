import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="home">
               This is regarding Single Page Application which contains a Home, About Me and Contact Me pages. I created a navabar which contains links to the three different pages. In Home page, it shows an overview of this application, In About Me page, you can get to know details about me and in Contact Me page, you can contact me by providing your details and a message to me.
            </div>
        );
    }
}

export default Home;