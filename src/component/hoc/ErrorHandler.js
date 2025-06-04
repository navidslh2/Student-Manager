import  { useState } from "react";
import Modal from "../ui/modal/Modal";

const ErrorHandler = (WrappedComponent, axios) => {
  const WithHooksErrorHandler = (props) => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')
    axios.interceptors.request.use(
      (request) => {
        setShow(false)
        return request;
      }
    );
    axios.interceptors.response.use(response => response,(error) =>{
        setShow(true)
        setError(error.message)
    }

    );
    const clickHandler=()=>{
        setShow(false)
    }
    return (
      <>
        <Modal show={show} backdropClick={clickHandler}>{error}</Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
  return WithHooksErrorHandler 
};

export default ErrorHandler;
   