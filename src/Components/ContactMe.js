import React, { Component } from 'react';
import './ContactMe.css'
import axios from 'axios'
class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            message:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleMessageChange=this.handleMessageChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3001/data',{
            name:this.state.name,
            email:this.state.email,
            message:this.state.message
        })
    }
    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handleMessageChange(event){
        this.setState({message: event.target.value})
    }
    render() {
        return (
            <div className="wrapper">
            <div className="container">
            <div className='row'>
            <div className='col-sm-5 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row'>
            <div className='col-12'>
            <div className="f" style={{ paddingTop: '49px', paddingLeft: '38px' }}>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" onChange={this.handleNameChange}/>
            </div>
            <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" onChange={this.handleEmailChange}/>
            </div>
            <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="5" onChange={this.handleMessageChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
export default ContactMe;