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
      url1: 'Imgs/delfin.jpg',
      url2: 'Imgs/do`lana.jpg',
      imgName1: "Delfin",
      imgName2: "Do'lana",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 3,
      url1: 'Imgs/echki.jpg',
      url2: 'Imgs/elak.jpg',
      imgName1: "Echki",
      imgName2: 'Elak',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 4,
      url1: 'Imgs/fil.jpg',
      url2: 'Imgs/favvora.png',
      imgName1: "Fil",
      imgName2: "Favvora",
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
      url1: 'Imgs/hakka.jpg',
      url2: 'Imgs/handalak.jpg',
      imgName1: "Hakka",
      imgName2: 'Handalak',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 7,
      url1: 'Imgs/ilon.jpg',
      url2: 'Imgs/igna.jpg',
      imgName1: "Ilon",
      imgName2: 'Igna',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 8,
      url1: 'Imgs/jirafa.png',
      url2: 'Imgs/jiyda.jpg',
      imgName1: "Jirafa",
      imgName2: 'Jiyda',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 9,
      url1: 'Imgs/kiyik.jpg',
      url2: 'Imgs/karam.jpg',
      imgName1: "Kiyik",
      imgName2: 'Karam',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 10,
      url1: 'Imgs/laylak.jpg',
      url2: 'Imgs/lavlagi2.jpg',
      imgName1: "Laylak",
      imgName2: 'Lavlagi',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 11,
      url1: 'Imgs/maymun.jpg',
      url2: 'Imgs/muzqaymoq.jpg',
      imgName1: "Maymun",
      imgName2: 'Muzqaymoq',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 12,
      url1: 'Imgs/ninachi.jpg',
      url2: 'Imgs/nok.jpg',
      imgName1: "Ninachi",
      imgName2: 'Nok',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 13,
      url1: 'Imgs/olmaxon.jpg',
      url2: 'Imgs/olcha.jpg',
      imgName1: "Olmaxon",
      imgName2: 'Olcha',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 14,
      url1: 'Imgs/panda.jpg',
      url2: 'Imgs/piyoz.jpg',
      imgName1: "Panda",
      imgName2: 'Piyoz',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 15,
      url1: "Imgs/qaldirg'och.jpg",
      url2: 'Imgs/qulupnay.png',
      imgName1: "Qaldirg'och",
      imgName2: 'Qulupnay',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 16,
      url1: 'Imgs/raqqosa.jpg',
      url2: 'Imgs/randa.jpg',
      imgName1: "Raqqosa",
      imgName2: 'Randa',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 17,
      url1: 'Imgs/sirtlon.png',
      url2: 'Imgs/sabzi.png',
      imgName1: "Sirtlon",
      imgName2: 'Sabzi',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 18,
      url1: 'Imgs/tuya.jpg',
      url2: 'Imgs/tarvuz.jpg',
      imgName1: "Tuya",
      imgName2: 'Tarvuz',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 19,
      url1: 'Imgs/ukki.jpg',
      url2: 'Imgs/uzum.jpg',
      imgName1: "Ukki",
      imgName2: 'Uzum',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 20,
      url1: 'Imgs/varrak.png',
      url2: 'Imgs/vaza.jpg',
      imgName1: "Varrak",
      imgName2: 'Vaza',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 21,
      url1: "Imgs/xo'roz.jpg",
      url2: 'Imgs/xurmo.jpg',
      imgName1: "Xo'roz",
      imgName2: 'Xurmo',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 22,
      url1: "Imgs/yo'lbars.jpg",
      url2: 'Imgs/yalpiz.jpg',
      imgName1: "Yo'lbars",
      imgName2: 'Yalpiz',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 23,
      url1: 'Imgs/zebra.jpg',
      url2: 'Imgs/zirak2.png',
      imgName1: "Zebra",
      imgName2: 'Zirak',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 24,
      url1: "Imgs/o'rgimchak.jpg",
      url2: "Imgs/o'rik.jpg",
      imgName1: "O'rgimchak",
      imgName2: "O'rik",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 25,
      url1: "Imgs/g'oz.jpg",
      url2: "Imgs/g'alla.jpg",
      imgName1: "G'oz",
      imgName2: "G'alla",
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 26,
      url1: 'Imgs/sher.jpg',
      url2: 'Imgs/shaftoli.jpg',
      imgName1: "Sher",
      imgName2: 'Shaftoli',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 27,
      url1: 'Imgs/chigirtka.jpg',
      url2: 'Imgs/chopon.jpg',
      imgName1: "Chigirtka",
      imgName2: 'Chopon',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
    {
      id: 28,
      url1: 'Imgs/bodring.jpg',
      url2: 'Imgs/shudring.jpg',
      imgName1: "Bodring",
      imgName2: 'Shudring',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!',
      audioUrl: 'Audios/first.mp3'
    },
  ]); 

  const letters = ['Aa', 'Bb', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Xx', 'Yy', 'Zz', "O’o’", "G’g’", 'Sh', 'Ch', 'Ng'];
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  //const [isLoading, setIsLoading] = useState(false);

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