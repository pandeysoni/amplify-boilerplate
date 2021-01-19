import React from 'react';
import {Button, Intent} from "@blueprintjs/core";

const SubmitButton = ({loading, handleClick, text, authState, formData}) => {
  let _text = text;
  if (!_text) {
    switch (authState) {
      case 'signIn':
        _text = 'Log In';
        break;
      case 'signUp':
        _text = 'Sign Up';
        break;
      case 'confirmSignUp':
        _text = 'Confirm';
        break;
      case 'resendSignUp':
        _text = 'Resend Code To Email';
        break;
      case 'forgotPassword':
        _text = 'Send Reset Code To Email';
        break;
      case 'forgotPasswordSubmit':
        _text = 'Update Password';
        break;
      default:
        _text = 'Log In';
        break;
    }
  }
  return (<Button
    className={'ws3-extra-large'}
    rightIcon={'arrow-right'}
    large={true}
    intent={Intent.PRIMARY}
    onClick={handleClick}
    loading={loading}
    text={_text}/>);
};

export default SubmitButton;
