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
    {
      id: 2,
      url1: 'Imgs/dingo.jpg',
      url2: 'Imgs/do`lana.jpg',
      imgName1: "Dingo iti",
      imgName2: "Do'lana",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 3,
      url1: 'Imgs/echki.jpg',
      url2: 'Imgs/eshshak.jpg',
      imgName1: "Echki",
      imgName2: 'Eshshak',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 4,
      url1: 'Imgs/fil.jpg',
      url2: 'Imgs/futbolchi.jpg',
      imgName1: "Fil",
      imgName2: "Futbo'lchi",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 5,
      url1: 'Imgs/gilos.jpg',
      url2: 'Imgs/gullar.jpg',
      imgName1: "Gilos",
      imgName2: 'Gullar',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 6,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 7,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 8,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 9,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 10,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 11,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 12,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 13,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 14,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 15,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 16,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 17,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 18,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 19,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 20,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 21,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 22,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 23,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 24,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 25,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 26,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 27,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 28,
      url1: 'Imgs/bimages.jpg',
      url2: 'Imgs/banana.jpg',
      imgName1: "Bo'ri",
      imgName2: 'Banan',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
  ]); 

  const [letters, setLetters] = useState(['Aa', 'Bb', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Xx', 'Yy', 'Zz', "O'o'", "G'g'", 'Sh', 'Ch', 'Ng']);
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
      <div className='box'></div>
    </div>
  );
};

export default Container;