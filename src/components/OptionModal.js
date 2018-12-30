import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
   <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
   >
       <h3 className="modal__title">Today You Will:</h3>
       {props.selectedOption && <p className="modal__selected">{props.selectedOption}</p>}
       <button
               className="modal__button"
            onClick={props.handleCloseModal}
       >
        Okay
       </button>
   </Modal>
);

export default OptionModal;