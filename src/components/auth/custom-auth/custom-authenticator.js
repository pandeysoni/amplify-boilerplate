import React, {useState} from 'react';
import * as uuid from 'uuid';
import * as classes from './custom-authenticator.module.scss';
import {Auth} from "aws-amplify";
import EmailElement from "./email-element";
import PasswordElement from "./password-element";
import {FormLabel} from "./sign-in-form-labels";
import SubmitButton from "./submit-button";
import {errorHandler} from "./error-handler";
import CodeElement from "./code-element";
import PasswordInfoElement from "./password-info-element";
import {useHandler} from "./handler-hooks";


const CustomAuthenticator = (props) => {
  const {authState, onStateChange} = props;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    code: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const handleInputChange = e => {
    const {value, dataset} = e.target;
    const {prop} = dataset;
    setFormData({
      ...formData,
      [prop]: value
    });
  };
  const [handleSubmitClick, inProgress] = useHandler(errorHandler, onStateChange, authState, Auth);
  const handleClick = () => {
    handleSubmitClick(formData, authState);
  };
  return (
    <div className={classes.custom_auth}>
      <FormLabel authState={authState} setFormState={onStateChange}/>
      <EmailElement authState={authState} handleInputChange={handleInputChange} email={formData.email}/>
      <PasswordElement
        authState={authState}
        handleInputChange={handleInputChange}
        password={formData.password}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}/>
      {
        authState === 'signIn' && (<div>
          <a href="#" onClick={e => {e.preventDefault(); onStateChange('forgotPassword')}}>Forgot Password</a>
        </div>)
      }
        {
            authState === 'signIn' && <PasswordInfoElement
              authState={authState}
              handleInputChange={handleInputChange} />
        }

      <CodeElement authState={authState} value={formData.code} handleInputChange={handleInputChange} />
      <div style={{marginTop: '1em'}}>
        <SubmitButton loading={inProgress} handleClick={handleClick} authState={authState}/>
      </div>

    </div>
  );
};

export default CustomAuthenticator;
