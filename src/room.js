import React from 'react';
import  { useState } from 'react';
import './room.css'

function Room(){
    
    let [islit,setlit] = useState(false); //using E6S Distructor method 
    let [age,setage]=useState(23);

    function updateLit(){
        console.log("Button Clicked");
        setlit(!islit);
        // setage(age+3);
        islit =!islit;
    }  
    let updateage=()=>(
        setage(age+3)
    );
    // let x='Hello ${islit? "lit":"dark"} World'

    // console.log(typeof(state));
    // console.log(state);
      

    return (
          <div className={"room " + (islit? "lit": "dark")} >
              the room is lit
                <br/>
                <button onClick={updateLit}>
                    Toogle Lit
                </button>
                <br/>
                This Room Component Lit: {islit? "Lit": "Dark" }
                <br/>
                 Your age is : {age}
                <button onClick={updateage}>
                    AgeButton 
                </button> 
          </div>
        );
    

}

export default Room;