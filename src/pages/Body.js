import React from "react";
import Axios from "axios";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address: null,
      phoneNumber: null,
      accountType: null,
      gender: null,
      dateOfBirth: null,
      nameCharLeft:20,
      addressChar: 40, 
    };
  }
  handleName = (e) => {
    let nameCharLeft2 = 20 - e.target.value.length // 20-1 =19    19-2=17    17-3=14
    // console.log(nameCharLeft + " this is the char that is left")
    if(nameCharLeft2<0){
      alert("You Have Exceeded your name charater limit.")
    }else{
    this.setState(

      {
        name: e.target.value,
        nameCharLeft:nameCharLeft2 //19
      },

      () => {
        console.log("this is the name " + this.state.name)
      }

    )
    }
  }
  handleAddress = (e) => {
    let addressChars = 40 -e.target.value.length 
    if (addressChars < 0 ){
      alert("You have Exceeded maximum characters allowed")
    }
      else{
    this.setState(
      {
        address: e.target.value,
        addressChar: addressChars
      },
      () => {
        console.log("this is the Address" + this.state.address)
      }
    )
    }
  }
  handlePhoneNumber = (e) => {
    if (isNaN(e.target.value)){
      alert("character values are not allowed ")
      
      
    }else{
      this.setState(
        {
          phoneNumber: e.target.value
        },
        () => {
          console.log("this is the Phone Number" + this.state.phoneNumber)
        }
      )
     
    }
  }
  handleAccountType = (e) => {
    this.setState(
      {
        accountType: e.target.value
      },
      () => {
        console.log("this is the Account Type" + this.state.accountType)
      }
    )
  }

  handleGender = (e) => {
    this.setState(
      {
        gender: e.target.value
      },
      () => {
        console.log("this is the Gender" + this.state.gender)
      }
    )
  }
  handleDob = (e) => {
    let dob = e.target.value;
    let dateArr=dob.split("-");
    let today = new Date( ); 
    let age = today.getFullYear() - dateArr[0];
    // console.log(age)
    if (age>100){
      alert(" Are you still coding at this age?!!")
    } else{

    
    this.setState(
      {
        dateOfBirth: e.target.value
      },
      () => {
        console.log("this is the DOB " , this.state.dateOfBirth)
      }
    )
    }
  }
  handleSubmit = (e) => {

    e.preventDefault();
    console.log(
      this.state.name,
      this.state.address,
      this.state.phoneNumber,
      this.state.accountType,
      this.state.gender,
      this.state.dateOfBirth,
    );
    if (this.state.name  === null || this.state.address  === null || this.state.phoneNumber === null || this.state.accountType  === null|| this.state.gender === null || this.state.dateOfBirth === null){
      alert("Please Fill out All of the Inputs!")
    }
}
componentDidMount=()=>{
  Axios.get("http://localhost:8080/userDetails")
  .then((resp)=>{
console.log(resp.data)
  })
}
  render() {
    return (
      <div className="row">

        <form action=" " method="POST">
          <div><lable>Name ({this.state.nameCharLeft} Left)</lable>
            <input type="text" onChange={this.handleName} placeholder="Please Enter full name" /></div>
          <div> <lable>Address ({this.state.addressChar} Left)</lable>
            <input type="text" onChange={this.handleAddress} placeholder=" please Enter Your Address" /></div>
          <div><lable>Phone Number</lable>
            <input type="text" onChange={this.handlePhoneNumber} placeholder="Please Enter Your Number" /></div>

          <div>

            <lable>Select Account Type</lable>
            <select id="acct type" onChange={this.handleAccountType} >
              <option selected="true">Select</option>
              <option>Customer Account</option>
              <option >Business Account</option>
            </select>
          </div>
          <div className="gender">
            <lable>Gender</lable>



            <input type="radio" name="gender" value="male" onClick={this.handleGender} />
            <label> Male </label>
            <input type="radio" name="gender" value="female" onClick={this.handleGender} />
            <label>Female</label>
          </div>

          <div>
            <lable>Date Of Birth</lable>
            <input type="date" onChange={this.handleDob} />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>

      </div>);
  }
}

export default Body;