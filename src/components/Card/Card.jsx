import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   console.log(props);
   return (
      <div className={s.divCard}>
         <button className={s.button} onClick={props.onClose}>X</button>
         <img className={s.img} src={ props.image} alt= { props.name } />         
         <h2 className={`${s.name} ${s.nameBackground}`}>{ props.name }</h2>
         {/* <div className={s.containerText}> */}
            <h2 className={s.species}>{ props.species }</h2>
            <h2 className={s.gender}>{ props.gender }</h2>
         {/* </div> */}
         <Link to={`/detail/${props.id}`} >
            <h5 className="card-title">{props.name}</h5>
         </Link>
      </div>
   );
}
