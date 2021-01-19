import React from 'react';
import {Button} from "@blueprintjs/core";
import InputElement from "./input-element";

const VALID_STATES = ['signIn', 'signUp', 'confirmSignUp', 'resendSignUp', 'forgotPassword'];
const EmailElement = ({email, handleInputChange, authState}) => {
  if (!VALID_STATES.includes(authState)) {
    return null;
  }
  return (
    <div className={'ws3-input'}>
      <InputElement
        data-prop={'email'}
        value={email}
        onChange={handleInputChange}
        type={'email'}
        label={'email'}
        placeholder={'john.doe@gmail.com'}/>
    </div>
  );
};

export default EmailElement;
