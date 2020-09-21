import React from 'react';
import './App.css';



export class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      gender: '',
      track:'',
      textAreaValue:''
    }
  this.handleChange = this.handleChange.bind(this)
  this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
    name: event.target.name,
    gender :event.target.gender,
    track : event.target.track,
    textAreaValue: event.target.textAreaValue
    })
  }
  formSubmit(event){
    event.preventDefault();
    
    console.log(this.state.name,this.state.gender,this.state.track,this.state.textAreaValue)


  }
  render(){
    return(
     <form onSubmit={this.formSubmit}>
       <h4>Intern Registration Form</h4>
        Please enter your name:<br/>
        <input type='text' name = 'name' onChange={this.handleChange} id="name"/>
        <div className = "radio">
          Select your gender<br/>
          <label>
            <input type = "radio" name="Gender"  value="male" checked={this.state.gender==="male"}  onChange={this.handleChange}/>
            <span>Male</span>
          </label>
        </div>
        <div className = "radio">
          <label>
            <input type = "radio" name="Gender" value="female"  checked={this.state.gender==="female"}  onChange={this.handleChange}/>
            <span>Female</span>
          </label>
        </div>
        <div className = "radio">
          <label>
            <input type = "radio" name="Gender"  value="other" checked={this.state.gender==="other"}  onChange={this.handleChange}/>
            <span>Other</span>
          </label>
        </div>
        <div className="track">
          Select your prefered track:<br/>
          <select>
            <option value="frontend">Frontend</option>
            <option value ="backend">Backend</option>
            <option value="full-stack">Full Stack</option>
            <option value="UI/UX">UI/UX</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>
        <div className="textArea">
          <p>What do you hope to achieve during the period of this internship?</p>
          <textarea value={this.state.textAreaValue} onChange={this.handleChange} id="textarea"></textarea>
        </div>

      <button >Submit</button>
      </form>
    );
  }
}