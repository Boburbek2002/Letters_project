import React, { useState } from 'react';
import Letter from './Letter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';

const Container = () => {

  const [letters, setLetters] = useState(['Aa', 'Bb', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', "G'g'", 'Xx', 'Yy', 'Zz', 'Sh', 'Ch', 'Ng', "’"]);


  return (
    <div className="container">
      <h1 className="text-center webSiteTitle">Alifboni o'rganamiz</h1>
      <Modal letter={letters} />
    </div>
  );
};

export default Container;