import React from "react";
import Button from "../../button";
import './SignIn.css'

const SignIn = ()=>{
    return(
        <> 
            <h2>Login</h2>
            <div className="input-container">
                <input type="text" placeholder="username"/>
            </div>
            <div className="input-container">
                <input type="password" placeholder="password" />
            </div>
            
            <Button
            btnType='green'
            >
                Login
            </Button>
        </>
    )
}
export default React.memo(SignIn)