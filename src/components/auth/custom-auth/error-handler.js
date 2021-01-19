import {showErrorToast, showWarningToast} from "../../../utils/toasts";

export const errorHandler = ({code, message, name}, onStateChange) => {
  switch (code) {
    case 'InvalidParameterException':
      showErrorToast('Invalid inputs provided.');
      break;
    case 'UserNotConfirmedException':
      showWarningToast('Your email is not confirmed.');
      onStateChange('resendSignUp');
      break;
    case 'UsernameExistsException':
      showWarningToast('User already exist.');
      onStateChange('signIn');
      break;
    case 'NotAuthorizedException':
      showErrorToast(message);
      break;
    case 'UserNotFoundException':
      showWarningToast('Sorry! No such user exists! Please sign up!');
      onStateChange('signUp');
      break;
    case 'CodeMismatchException':
      showWarningToast('That is not the right code!');
      break;
    default:
      showErrorToast('Ops! Something broke.')
  }
};
