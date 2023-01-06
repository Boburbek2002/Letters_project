import React, { useState } from "react";
import Letter from "./Letter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyModal from "./MyModal";
import { letterApi } from "./data";
import { letters } from "./data";

const Container = () => {
  
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const changedIndex = (ind) => {
    setIndex(ind);
  };

  const changeModal = (mod) => {
    setModal(mod);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center webSiteTitle">Alifboni o'rganamiz</h1>
        <Letter
          letter={letters}
          changeModal={changeModal}
          changedIndex={changedIndex}
        />
        {modal ? (
          <MyModal
            letter={letters}
            letterApi={letterApi}
            index={index}
            setModal={setModal}
          />
        ) : null}
      </div>
    </>
  );
};

export default Container;
