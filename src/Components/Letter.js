import React from 'react';

const Letter = ({letter, setModal, changedIndex}) => {
  return (
    <>
      <div className='row'>
        
        {letter.map((element, index) => (
          <div className="col-md-2 col-sm-3 col-4 d-flex justify-content-center align-items-center mt-3" key={index}>
            <div 
              className="d-flex justify-content-center align-items-center w-100 letter" 
              onClick={() => {
                changedIndex(index);
                setModal(true);
              }}
            >
              {element}
            </div>
          </div>
        ))}
      </div>
    </>
    
  );
};

export default Letter;