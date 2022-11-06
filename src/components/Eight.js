import React, { Component } from "react";
import Button from "./Button";
import './Eight.css'

export class Eight extends Component {
  constructor(){
    super();
    this.state ={fName:'', lName:'', email:'' }
  }


  render() {
    return (
      <div className="form">
        <form action="">
          <div className="group">
            <div className="group1">
              <div className="form-group">
                <input type="text" placeholder="First Name" value={this.state.fName} onChange={(event)=>{this.setState({fName:event.target.value})}}/>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" value={this.state.lName} onChange={(event)=>{this.setState({lName:event.target.value})}}/>
              </div>
              <div className="form-group">
                <input type="email" placeholder="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
              </div>
              <div className="form-group">
                <input type="password" placeholder="password" />
              </div>
            </div>
            <div className="group2">
              <div className="form-group">
                <input type="password" placeholder="password" />
              </div>
              <div className="form-group">
                <input type="date" placeholder="" />
              </div>
              <div className="form-group">
                <input type="address" placeholder="Address" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="btn-group">
            </div>
          </div>
              <Button btnName="Submit" className='form-btn'/>
        </form>




        <h1>{this.state.fName}</h1>
        <h1>{this.state.lName}</h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default Eight;
