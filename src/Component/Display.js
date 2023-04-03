import React, { Component } from 'react'

class Display extends Component {
    constructor(props){
        super(props);
console.log(props)
    }
  render() {
    return (
    <>
    <div className="eff">EMPLOYEE FEEDBACK DATA</div>
        <div className='flexcontainer'>
        {this.props.value.map((item, index) => {
          return (
            <div key={index}>              

             <div className='itemdisp'>{item.name} | {item.department} | {item.rating}</div>
                            </div>
          
          )
          
        }
        
        )
        }
        </div>
        <buuton className="button"  onClick={this.props.taggleFunc}>Go Back</buuton>
        </>
    )
  }
}
export default Display