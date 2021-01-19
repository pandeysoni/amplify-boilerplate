import React, {useEffect, useState} from 'react';
import {Auth} from 'aws-amplify';
import {showSuccessToast} from "../../../utils/toasts";

const createHandler = (errorHandler, setInProgress, onStateChange) => async (fn, authState) => {
  setInProgress(true);
  try {
    const data = await fn();
    setInProgress(false);
    switch (authState) {
      case 'signUp':
        onStateChange('confirmSignUp');
        break;
      case 'resendSignUp':
        onStateChange('confirmSignUp');
        break;
      case 'confirmSignUp':
        onStateChange('signIn');
        showSuccessToast('Thanks for confirming your email!');
        break;
      case 'forgotPassword':
        onStateChange('forgotPasswordSubmit');
        showSuccessToast('One code has been sent to your email!');
        break;
      case 'forgotPasswordSubmit':
        onStateChange('signIn');
        showSuccessToast('Your password has been reset successfully!');
        break;
      default:
        onStateChange('signIn')
    }
  } catch (ex) {
    console.log(ex);
    errorHandler(ex, onStateChange);
    setInProgress(false);
  }
};

const signUp = ({email, password}) => Auth.signUp(email, password);

export const useHandler = (errorHandler, onStateChange, authState) => {
  const [{handler}, _setHandler] = useState({
    handler: (formData, authState) => {}
  });
  const setHandler = fn => _setHandler({handler: fn});
  const [inProgress, setInProgress] = useState(false);
  const genericHandler = createHandler(errorHandler, setInProgress, onStateChange);
  useEffect(() => {
    switch (authState) {
      case 'signIn':

        setHandler(
          (formData, authState) =>
            genericHandler(async () => {
              let user = await Auth.signIn(formData.email, formData.password);
              if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                user = Auth.completeNewPassword(user, formData.password);
              }
            }, authState));
        break;
      case 'signUp':
        setHandler(
          (formData, authState) =>
            genericHandler(() => Auth.signUp(formData.email, formData.password), authState)
        );
        break;
      case 'confirmSignUp':
        setHandler((formData, authState) =>
          genericHandler(() => Auth.confirmSignUp(formData.email, formData.code), authState)
        );
        break;
      case 'resendSignUp':
        setHandler((formData, authState) =>
          genericHandler(() => Auth.resendSignUp(formData.email), authState)
        );
        break;
      case 'forgotPassword':
        setHandler((formData, authState) =>
          genericHandler(() => Auth.forgotPassword(formData.email), authState)
        );
        break;
      case 'forgotPasswordSubmit':
        setHandler((formData, authState) =>
          genericHandler(() => Auth.forgotPasswordSubmit(formData.email, formData.code, formData.password), authState)
        );
        break;
      default:
        setHandler(() => {
          console.log(typeof genericHandler);
        });
    }
  }, [errorHandler, onStateChange, authState]);
  return [handler, inProgress];
};
