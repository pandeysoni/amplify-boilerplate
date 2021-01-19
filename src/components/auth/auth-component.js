import React, {useContext} from 'react';
import {Authenticator} from "aws-amplify-react";
import {Button, Card, Elevation, Intent} from "@blueprintjs/core";

import {UserContext} from "./contexts";
import awsconfig from "../../aws-exports";

import CustomAuthenticator from "./custom-auth/custom-authenticator";

const AuthComponent = () => {
  const {cognitoUser} = useContext(UserContext);
  return (
    <div>
        <div className={'auth-btns'}>
          {cognitoUser && <Button
            large={true}
            onClick={() => {}}
            intent={Intent.DANGER}
            icon={'log-out'} text={'Sign Out'} />}
          {!cognitoUser && <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
            <CustomAuthenticator />
          </Authenticator>}
        </div>
    </div>
  );
};

export default AuthComponent;
