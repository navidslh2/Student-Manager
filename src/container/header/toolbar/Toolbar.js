import React,{useState} from "react";
import './Toolbar.css'
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../component/ui/button/button";
import Modal from "../../../component/ui/button/modal/Modal";
import SignIn from "../../../component/ui/button/user/sign in/SignIn";
const Toolbar = ()=>{
    const [showModal,setShowModal] = useState(false)
    const modalHandler =()=>{
        setShowModal(true)
    }
    const backdropClickHandler = ()=>{
        setShowModal(false)

    }
    return (
        <div className="Toolbar">
            <nav>
                <MenuItems />
            </nav>
            <Button
            btnType='red'
            clicked={modalHandler}
            >
                Login / Sign up
            </Button>
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