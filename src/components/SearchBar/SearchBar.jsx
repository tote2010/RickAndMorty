import React, { useState } from 'react';
import s from './Button.module.css';

export default function SearchBar(props) {
   //console.log(props);
   const [character, setCharacter] = useState('');

   const handleSearch = (event) => {
      let { value } = event.target;
      setCharacter(value);
   };
   //console.log(handleSearch);
   return (
      <div className={s.searchdiv} >
         <input className={s.input} type='search' onChange={handleSearch}/>
         <button className={s.button} onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
