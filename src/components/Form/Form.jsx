import React from 'react';


export function validate(inputs) {
    const errors = {};

    if (inputs.name !== `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`)
          errors.name = "el nombre de usuario tiene que ser un email"

    if (!inputs.name)
        errors.origin = "el nombre de usuario no puede estar vacío."

    if (inputs.name.length > 35)
        errors.origin = "no puede tener más de 35 caracteres."

    if (inputs.password !== `/^[0-9_-]{1}$/`)
          errors.name = "el nombre de usuario tiene que ser un email."

    if (inputs.password.length <= 6 && inputs.password.length >= 10)
          errors.origin = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."

    return errors;
}


const Form = (props) => {

    const [userData, setUserData] = React.useState({ username: '', password: '' });

    const [errors, setErrors] = React.useState({
        username: '',
        password: '',
  });

    const handleInputChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
      });

      setErrors(
        validate({
              ...errors,
              [e.target.name]: e.target.value
        })
  );
    }

    return (
        <div>
              <form>
                <label>Username: </label>
                <input type='text' onChange={handleInputChange}></input>
                <label>Password: </label>
                <input type='password' onChange={handleInputChange}></input>
                <img src="./img/input_error.png" alt="" />
                <br />
                <button type='submit'>LOGIN</button>
              </form>
        </div>
  );
}
