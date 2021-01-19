import React from 'react';
import {Button} from "@blueprintjs/core";
import InputElement from "./input-element";

const VALID_STATES = ['confirmSignUp', 'forgotPasswordSubmit'];
const CodeElement = ({value, handleInputChange, authState}) => {
  if (!VALID_STATES.includes(authState)) {
    return null;
  }
  return (
    <div className={'ws3-input'}>
      <InputElement
        data-prop={'code'}
        value={value}
        onChange={handleInputChange}
        type={'text'}
        label={'code'}
        placeholder={'9896'}/>
    </div>
  );
};

export default CodeElement;
