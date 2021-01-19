import React from 'react';

export const LoginLabel = ({handleClick}) => {
  const onClick = e => {
    e.preventDefault();
    handleClick();
  };
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Login</h2>
    <div className={'bp3-text-large'}>
      <span>Enter your account details</span>
       
        <span>&nbsp;Don't have an account? </span>
        <strong><a href="#" onClick={onClick}>Click here to Create An Account</a></strong>
      
    </div>
  </React.Fragment>
};

export const SignUpLabel = ({handleClick}) => {
  const onClick = e => {
    e.preventDefault();
    handleClick();
  };
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Sign Up!</h2>
    <div className={'bp3-text-large'}>
      <span> <strong>
          <a href="#" onClick={onClick}>Sign In Here</a>
        </strong>
      </span>
    </div>
  </React.Fragment>
};

export const ResendSignUpLabel = () => {
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Confirm Email</h2>
    <div className={'bp3-text-large'}>
      <span>Send a code to your email and verify.</span>
    </div>
  </React.Fragment>
};

export const ConfirmSignUpLabel = ({handleClick}) => {
  const onClick = e => {
    e.preventDefault();
    handleClick();
  };
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Confirm Email</h2>
    <div className={'bp3-text-large'}>
      <span>We have sent you an email with the code. Please wait for a few minutes.
        If you still cannot find it, after several minutes, <strong>
          <a href="#" onClick={onClick}>Resend Code</a>
        </strong>
      </span>
    </div>
  </React.Fragment>
};

export const ForgotPasswordLabel = () => {
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Reset Your Password</h2>
    <div className={'bp3-text-large'}>
      <span>Enter your email below and click on the button <strong>Reset Password</strong>. We will send you a code to your
      email which you will need to confirm.</span>
    </div>
  </React.Fragment>
};

export const ForgotPasswordSubmitLabel = () => {
  return <React.Fragment>
    <h2 className={'bp3-heading'}>Reset Your Password</h2>
    <div className={'bp3-text-large'}>
      <span>Please check your email for the code to reset your password. Enter your email, the code and your new
      password to reset your password.</span>
    </div>
  </React.Fragment>
};

export const FormLabel = ({authState, setFormState}) => {
  switch (authState) {
    case 'signIn':
      return <LoginLabel handleClick={() => setFormState('signUp')}/>;
    case 'signUp':
      return <SignUpLabel handleClick={() => setFormState('signIn')}/>;
    case 'confirmSignUp':
      return <ConfirmSignUpLabel handleClick={() => setFormState('resendSignUp')}/>;
    case 'resendSignUp':
      return <ResendSignUpLabel/>;
    case 'forgotPassword':
      return <ForgotPasswordLabel/>;
    case 'forgotPasswordSubmit':
      return (<ForgotPasswordSubmitLabel/>);
    default:
      return <LoginLabel handleClick={() => setFormState('signUp')}/>;
  }
};
