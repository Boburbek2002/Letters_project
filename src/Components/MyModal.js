import React from 'react';
import './Modal.module.css';
import classes from './Modal.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({modal, setModal, index, letterApi, letter}) => {

  const modalClasses = [classes.MyModal];

  if (modal){
    modalClasses.push(classes.active)
  }

  return (
    <div className={modalClasses.join(' ')}>
      <div className={classes.ModalDiv}>
      <div className='d-flex Close w-100'>
        <div className='col-4'><h3 className='modal-letter'>{letter[index]}</h3></div>
        <div className='col-4'><h3 className='modal-letter flaversFont'>{letter[index]}</h3></div>
        <button 
          className={classes.CloseBtn}
          onClick={() => setModal(false)}
        >
          &times;
        </button>
        </div>
        <div className='row border-top rounded-0 p-0 pt-3 '>
          
          <div className='col-sm-6 col-6 ModalDiv-div'>
            <img src={letterApi[index].url1} alt="Image" className='w-100 modalImg' />
            <div className='d-flex justify-content-between flex-wrap'>
              <h3 className='mt-1'>{letterApi[index].imgName1}</h3>
              <h3 className='mt-1 flaversFont'>{letterApi[index].imgName1}</h3>
            </div>
          </div>
          <div className='col-sm-6 col-6 border-start ModalDiv-div'>
            
            <img src={letterApi[index].url2} alt="Image" className='w-100 modalImg' />
            <div className='d-flex justify-content-between flex-wrap'>
              <h3 className='mt-1'>{letterApi[index].imgName2}</h3>
              <h3 className='mt-1 flaversFont'>{letterApi[index].imgName2}</h3>
            </div>
            
          </div>
          <div className='col-md-12 modalParag'>
            <p className='modalParagText'>
              {letterApi[index].text}
            </p>
            <audio controls className='w-50'>
              <source src={letterApi[index].audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyModal;