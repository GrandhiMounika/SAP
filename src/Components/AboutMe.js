import React, { Component } from 'react';
import './AboutMe.css'
import download from './download.jpg'
class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:'true'
        }
        this.handleButton=this.handleButton.bind(this);
    }
    handleButton(){
       this.setState({flag:!this.state.flag})
    }
    render() {
        return (
            <div className="abt">
                <img src={download} alt="Img not found"/>
                <h1>Grandhi Mounika</h1>
                <span>I am a software developer working in Wipro as a project engineer.</span>
                <div className="btn">
                    <span>
                        {this.state.flag?null:
                        <p>I like to learn new technologies and create applications in various parts of software development. I am a self learner, currently diving deeper into React. I believe that to be successful in life, one needs to be obssesive with their dreams and keep working towards them.</p>}
                    </span>
                    <button onClick={this.handleButton} className="b">{this.state.flag?'Show More':'Show Less'}</button>
                </div>
            </div>
        );
    }
}

export default AboutMe;