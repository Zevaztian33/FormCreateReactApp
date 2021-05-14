import React, {useState} from 'react';
import {Form, Label, Terms, ContentButton, Button, TextCheck, TextError2} from './elements/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './components/Input';

const App = () => {
  const [user, changeUser] = useState({field: '', check: null});
  const [name, changeName] = useState({field: '', check: null});
  const [pass, changePass] = useState({field: '', check: null});
  const [pass2, changePass2] = useState({field: '', check: null});
  const [email, changeEmail] = useState({field: '', check: null});
  const [phone, changePhone] = useState({field: '', check: null});
  const [terms, changeTerms] = useState(false);
  const [formCheck, changeFormCheck] = useState(null);

  const expressions = {
    expUser: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    expName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    expPass: /^.{4,12}$/, // 4 a 12 digitos.
    expEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    expPhone: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const checkPass2 = () => {
    if(pass.field.length > 0){
      if(pass.field !== pass2.field){
        changePass2((prevState) => {
          return {...prevState, check: 'false'}
        })
      }else{
        changePass2((prevState) => {
          return {...prevState, check: 'true'}
        })
      }
    }
  }

  const onChangeTerms = (e) => {
    changeTerms(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(
      user.check === 'true' &&
      name.check === 'true' &&
      pass.check === 'true' &&
      pass2.check === 'true' &&
      email.check === 'true' &&
      phone.check === 'true' &&
      terms
    ){
      changeFormCheck(true);
      changeUser({field: '', check: null});
      changeName({field: '', check: null});
      changePass({field: '', check: null});
      changePass2({field: '', check: null});
      changeEmail({field: '', check: null});
      changePhone({field: '', check: null});
    }else{
      changeFormCheck(false);
    }
  }

  return (
    <main>
      <h1>Formulario hecho con Create React App</h1>
      <Form action="" onSubmit={onSubmit}>
        <Input 
          state={user}
          changeState={changeUser}
          label="Usuario"
          placeholder="john123"
          type="text"
          name="usuario"
          textError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guión bajo."
          expRegular={expressions.expUser}
        />
        <Input 
          state={name}
          changeState={changeName}
          label="Nombre"
          placeholder="John Doe"
          type="text"
          name="nombre"
          textError="El nombre solo puede contener letras y espacios"
          expRegular={expressions.expName}
        />
        <Input 
          state={pass}
          changeState={changePass}
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="password"
          name="password"
          textError="La contraseña tiene que contener de 4 a 12 caracteres."
          expRegular={expressions.expPass}
        />
        <Input
          state={pass2}
          changeState={changePass2}
          label="Repetir contraseña"
          placeholder="Ingresa tu contraseña nuevamente"
          type="password"
          name="password2"
          textError="Debes escribir nuevamente la contraseña por seguridad"
          functionCheck={checkPass2}
        />
        <Input 
          state={email}
          changeState={changeEmail}
          label="Correo Electrónico"
          placeholder="john@correo.com"
          type="email"
          name="email"
          textError="Ingresa un correo valido"
          expRegular={expressions.expEmail}
        />
        <Input
          state={phone}
          changeState={changePhone}
          label="Teléfono"
          placeholder="9XXXXXXXX"
          type="text"
          name="phone"
          textError="Ingresa un número de teléfono valido"
          expRegular={expressions.expPhone}
        />
        <Terms>
          <Label>
            <input 
              type="checkbox" 
              name="terms" 
              id="terms" 
              checked={terms}
              onChange={onChangeTerms}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </Terms>
        {formCheck === false && <TextError2>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b>Por favor rellene el formulario correctamente.
          </p>
        </TextError2>}
        <ContentButton>
          <Button type="submit">Enviar</Button>
          {formCheck === true && <TextCheck>¡Formulario enviado exitosamente!</TextCheck>}
        </ContentButton>
      </Form>
      <p>Formulario basado en curso de FalconMaster: <a href="https://www.youtube.com/watch?v=tli5n_NqQW8&t=5925s" target="_blank" rel="noreferrer">Guía Completa de Validación de Formularios en React</a></p>
    </main>
  );
}

export default App;