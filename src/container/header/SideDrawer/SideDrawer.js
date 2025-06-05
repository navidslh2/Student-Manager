import React, { useContext, useState } from "react";
import "./SideDrawer.css";
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../component/ui/button/button";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../../../context/auth/authContext";

const open = {
  hidden: {
    transform: "translateX(100%)",
  },
  visible: {
    transform: "translateX(0)",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "translateX(100%)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SideDrawer = (props) => {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  let auth = false;
  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    auth = true;
  }
  const loginHandler = () => {
    navigate("/login", { replace: true });
  };
    const logoutHandler = () => {
    dispatch({ type: "logout" });
    navigate("/", { replace: true });
  };
  return (
    <AnimatePresence>
      {props.open ? (
        <motion.div
          className="SideDrawer"
          variants={open}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <nav>
            <MenuItems />
          </nav>
          <div className="boxButton">
            {auth ? (
              <Button btnType="red" clicked={logoutHandler}>
                logout
              </Button>
            ) : (
              <Button btnType="red" clicked={loginHandler}>
                Login/Signup
              </Button>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default React.memo(SideDrawer);

// import React, { useState } from "react";
// import './SideDrawer.css'
// import MenuItems from "../MenuItems/MenuItems";
// import Button from "../../../component/ui/button/button";
// import { useNavigate } from "react-router";

// const SideDrawer=(props)=>{
//     const navigate = useNavigate()
//     let classSideDrawer=["SideDrawer"]
//     if(props.open){
//         classSideDrawer=["SideDrawer" , "open"]
//     }else{
//         classSideDrawer=["SideDrawer" , "close"]
//     }
//     const loginHandler = ()=>{
//         classSideDrawer=["SideDrawer" , "close"]
//         navigate('/login',{replace:true})
//     }
//     return(
//         <div className={classSideDrawer.join(" ")}>

//             <nav>
//                 <MenuItems />
//             </nav>
//             <div className="boxButton">
//             <   Button
//                 btnType='red'
//                 clicked={loginHandler}
//                 >
//                     Login / Sign up
//                 </Button>
//             </div>

//         </div>
//     )
// }

// export default React.memo(SideDrawer)
