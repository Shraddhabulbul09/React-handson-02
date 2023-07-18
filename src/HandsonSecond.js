import {Component} from "react";

class HandsonSecond extends Component{
   
   state={
    name:"",
    department:"",
    ratings:"",
    clicked:true,
    data:[]
   }


handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    }


handleClick=()=>{
    const obj={
        name:this.state.name,
        department:this.state.department,
        ratings:this.state.ratings
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,name:"", department:"",ratings:""})
    console.log(this.state.data);
}


render(){
    return(
        <>

        <h1>EMPOLYEE FEEDBACK FORM</h1>
        <p className="text1"><strong>Name:</strong></p>
         <p  className="text2"><strong>Department:</strong></p>
         <p  className="text3"><strong>Ratings:</strong></p>
      
     <div className="boxes2">

          <input className="boxes"  type="text" name="name" onChange={this.handleChange} value={this.state.name}/>

          <input className="boxes" type="text" name="department" onChange={this.handleChange}  value={this.state.department}/>
         
          <input className="boxes" type="number" name="ratings" onChange={this.handleChange}  value={this.state.ratings}/>
          
     </div>

     <button className="submit-btn" onClick={this.handleClick}>Submit</button>

     <div className="array">

        {this.state.data.map((item, index)=>{
            return(
               <h2 key={index} className="box">Name:{item.name} | Department:{item.department} | Ratings:{item.ratings}</h2>
            )
         })}
</div>
       </>
    )
}



}


export default HandsonSecond  