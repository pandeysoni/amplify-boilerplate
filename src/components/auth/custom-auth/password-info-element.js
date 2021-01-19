import React from 'react';
import {Button} from "@blueprintjs/core";

const VALID_STATES = ['signIn', 'signUp', 'forgotPasswordSubmit'];
const PasswordInfoElement = ({value, handleInputChange, authState}) => {
    if (!VALID_STATES.includes(authState)) {
        return null;
    }
    return (
        <div className={'bp3-text-muted'}>
            <ul>
                <li>One lowercase character</li>
                <li>One uppercase character</li>
                <li>One number</li>
                <li>One special character</li>
                <li>8 characters minimum</li>
            </ul>
        </div>
    );
};

export default PasswordInfoElement;
