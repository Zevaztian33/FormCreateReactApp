import React from 'react';
import {Label, Input, GroupInput, TextError, IconValidation} from './../elements/Forms';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ContentInput = ({state, changeState, type, label, placeholder, name, textError, expRegular, functionCheck}) => {
    const onChange = (e) => {
        changeState({...state, field: e.target.value});
    }

    const validation = () => {
      if(expRegular){
        if(expRegular.test(state.field)){
          changeState({...state, check: 'true'});
        }else{
          changeState({...state, check: 'false'});
        }
      }
      if(functionCheck){
        functionCheck();
      }
    }
    
    return (
        <div>
          <Label htmlFor={name} check={state.check}>{label}</Label>
          <GroupInput>
            <Input 
              type={type} 
              placeholder={placeholder} 
              id={name} 
              value={state.field} 
              onChange={onChange}
              onKeyUp={validation}
              onBlur={validation}
              check={state.check}
            />
            <IconValidation 
              icon={state.check === 'true' ? faCheckCircle : faTimesCircle} 
              check={state.check}/>
          </GroupInput>
          <TextError check={state.check}>{textError}</TextError>  
        </div>
    );
}

export default ContentInput;