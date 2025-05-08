import React,{useState} from "react";
import './Toolbar.css'
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../component/ui/button/button";
import Modal from "../../../component/ui/button/modal/Modal";
import SignIn from "../../../component/ui/button/user/sign in/SignIn";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../../component/ui/button/backdrop/Backdrop";

const Toolbar = ()=>{
    const [showModal,setShowModal] = useState(false)
    const [showSideDrawer, setShowSideDrawer] = useState(false)
    const modalHandler =()=>{
        setShowModal(true)
    }
    const backdropClickHandler = ()=>{
        setShowModal(false)

    }
    const sideDrawerHamdler = ()=>{
        setShowSideDrawer(true)
    }
    const backdropClick=()=>{
        setShowSideDrawer(false)
    }

    return (
        <div className="Toolbar">
            <Backdrop 
            show={showSideDrawer}
            backdropClick={backdropClick}
            />
            <SideDrawer
            open={showSideDrawer}
            />
            <div className="hamberger">
                <Button
                btnType="green"
                clicked={sideDrawerHamdler}
                >
                    <i class="fa-solid fa-bars"></i>
                </Button>
            </div>
            
            <nav className="d-none d-lg-flex">
                <MenuItems />
            </nav>
            <div className="d-none d-lg-flex">
                <Button
                btnType='red'
                clicked={modalHandler}
                >
                    Login/Sign up
                </Button>
            </div>

            <Modal
            backdropClick={backdropClickHandler}
            show={showModal}
            >
                <SignIn />
            </Modal>
        </div>
    )
}

export default React.memo(Toolbar)