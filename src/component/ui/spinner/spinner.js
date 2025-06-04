import React from "react"

const Spinner = ()=>{
    return(
         <div className="spinner-border d-block m-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default React.memo(Spinner)