import React from "react";

const test = async ()=>{
    const emailValue = 'navid@gmail.com'
    const passwordValue = '12345678'
    try{
        const res = await fetch('http://localhost/student/user_login',{
        method:'POST',
        headers: {
            'Accept' : 'application/json',
            'contenr-type' : 'application/json'
        },
        body : JSON.stringify({
            email : emailValue ,
            password : passwordValue
        })
    });
    const data = await res.json()
    }catch(error){
        console.log(error.message)
    }


}