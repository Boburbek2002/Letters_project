import React, { useState } from 'react';
import Letter from './Letter';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './MyModal';

const Container = () => {

  const [letterApi, setLetterApi] = useState([
    {
      id: 0,
      url1: 'Imgs/ayiq.jpg',
      url2: 'Imgs/Asal.jpg',
      imgName1: 'Ayiq',
      imgName2: 'Asal',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 1,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
  ]); 

  const [letters, setLetters] = useState(['Aa', 'Bb', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Xx', 'Yy', 'Zz', "O'o'", "G'g'", 'Sh', 'Ch', 'Ng', "(’)"]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const changedIndex = (ind) => {
    setIndex(ind);
    console.log(index);
  }


  return (
    <div className="container">
      <h1 className="text-center webSiteTitle">Alifboni o'rganamiz</h1>
      <Letter
        letter={letters}
        setModal={setModal}
        changedIndex={changedIndex}
      />
      <MyModal letter={letters} letterApi={letterApi} index={index} modal={modal} setModal={setModal} /> 
    </div>
  );
};

export default Container;