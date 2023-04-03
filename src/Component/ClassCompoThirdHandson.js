import React, { Component } from 'react'
import "./ClassCompo.css"
import Display from './Display'
export class ClassCompoThirdHandson extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    data: [],
    clicked:true,
  }
  handleOnchange = (e) => {

    this.setState({ [e.target.name]: e.target.value })
  }
  toggleFunction=()=>{
this.setState({clicked:!this.state.clicked})
}
  handleSubmit = (e) => {
    e.preventDefault()

    const objData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    }

    this.state.data.push(objData)
    this.setState({ data:this.state.data,
      clicked:false
    })
    // console.log(this.state.data)
    }
  render() {
    return (
<>
{ this.state.clicked?
      <>
        <div className='container'>
          <div className="eff">EMPLOYEE FEEDBACK FORM</div>
          <label>Name:</label>
          <input name="name" onChange={this.handleOnchange} className="nametxt" />

          <br />
          <label>Department:</label>
          <input name="department" className="nametxt" onChange={this.handleOnchange} />
          <br />
          <label>Rating:</label>
          <input name="rating" className="nametxt" onChange={this.handleOnchange} />
          <br />
          <button className="button" onClick={this.handleSubmit}>Submit</button>
        </div>
              </>:
            <Display value={this.state.data} taggleFunc={this.toggleFunction}/>
}
      </>
    )
  }
}

export default ClassCompoThirdHandson