import React from 'react';

const CardDetail = (props) => {

    const {characters, setCharacter} = React.useState([]);

      React.useEffect(() => {
            fetch(`https://rickandmortyapi.com/api/character/${characters}`)
              .then((response) => response.json())
              .then((char) => {
                if (char.name) {
                  setCharacter(char);
                } else {
                  window.alert("No hay personajes con ese ID");
                }
              })
              .catch((err) => {
                window.alert("No hay personajes con ese ID");
              });
            return setCharacter({});
          }, []);

    
      function backToHome(){

      }

   return (
            <div>
                  <h1>Nombre: {props.name}</h1>
                  <h3>Status: {props.status}</h3>
                  <h3>Species {props.species}</h3>
                  <h3>Gender {props.gender}</h3>
                  <h3>Origin {props.origin}</h3>
                  <img src={props.image} alt={props.names}/>
                  <button onClick={backToHome}>Volver</button>
            </div>
      );
};

export default CardDetail;