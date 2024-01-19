import React, { useRef } from 'react'
import Form_v2 from './Form_v2'
import { IoMdCloseCircleOutline } from "react-icons/io";


const Popup = ({onClose}:any) => {

    const modalRef = React.useRef<HTMLDivElement>(null);

    const closePopup = (e:any) =>  {
        if(modalRef.current === e.target){
            onClose();
        }
    }
    
  return (
    <div ref={modalRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col">
        <button 
            onClick={onClose}
            className="place-self-end mr-3">
                <IoMdCloseCircleOutline size={30}/>
        </button>
        <Form_v2 />
      </div>
    </div>
  )
}

export default Popup
