import React  from 'react';
import Card from '../Card/Card.jsx'
import s from './Cards.module.css'

export default function Cards(props) {
   //console.log(props);
   const { characters } = props;
   return (
         <div className={s.container}>
            { characters.map((val, i) => (<Card 
                                             name = { val.name }
                                             species = { val.species }
                                             gender = { val.gender }
                                             image = { val.image } alt= { val.name }
                                             id={i}
                                             key = {i}
                                          />))}
         </div>);
}
