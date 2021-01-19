import React from 'react';
import {Button} from "@blueprintjs/core";
import InputElement from "./input-element";

const VALID_STATES = ['signIn', 'signUp', 'forgotPasswordSubmit'];
const PasswordElement = ({authState, password, handleInputChange, showPassword, toggleShowPassword}) => {
  if (!VALID_STATES.includes(authState)) {
    return null;
  }
  return (
   <div className={'ws3-input'}>
     <InputElement
       value={password}
       onChange={handleInputChange}
       data-prop={'password'}
       rightElement={<Button
         onClick={toggleShowPassword}
         minimal={true}
         large={true}
         icon={showPassword ? 'eye-off' : 'eye-open'}/>}
       icon={'eye-off'}
       type={showPassword ? 'text' : 'password'}
       label={'password'}
       placeholder={'enter password here ... '}/>
   </div>
  );
};

export default PasswordElement;
