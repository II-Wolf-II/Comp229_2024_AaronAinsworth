import React from 'react';


function handleClick (){
   //gettting the values
   try{
    let x = document.forms["Form"]["name"].value;
    if (x === "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["Form"]["email"].value;
    if (y === "") {
      alert("Email must be filled out");
      return false;
    }
    let z = document.forms["Form"]["msg"].value;
    if (z === "") {
      alert("Message must be filled out");
      return false;
    }
  }catch(error){

  }
  
   var name;
   var email;
   var message;
   

    name = document.getElementById("name").value;
    localStorage.setItem("txtValue", name);
    console.log(name);

    
   
      email = document.getElementById("email").value;
      //localStorage.setItem("txtValue2", email);
      console.log(email);
  message= document.getElementById("msg").value; 

  //localStorage.setItem("txtValue3", message);
  console.log(message);

   
  
 


  
   
};
const Contact = () => {

  return (

    <div>

<h1>Contact Me</h1>
<p>Name: Aaron Ainsworth</p>
<p>Number: 7058283111</p>
<p>Times to contact: Monday-Friday: 10AM - 10PM</p>
<p>                  Weekends:      1 PM - 9 PM</p>

<div className="container">
    <div className="jumbotron">
<form name='Form' method='POST'>
    <label> Name:</label>
    <br></br>
    <input type="text" size="19" name="Contact-Name" id="name"  required></input>
    <br></br>
    <label>Email:</label><br></br>
    <input type="email" name="Contact-Email" id="email"  required></input>
    <br></br> 
    <label>Message:</label><br></br> 
    <textarea name="Contact-Message" rows="6" cols="20" id="msg" required>
    </textarea><br></br>
    <input type="button" value="Submit" onClick={handleClick}></input>
</form>
</div>
</div>
</div>

  );

}




export default Contact;