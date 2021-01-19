import React, {useContext} from 'react';
import {Auth} from 'aws-amplify';

import {UserContext} from "../components/auth/contexts";
import {Button, Intent} from "@blueprintjs/core";
import AuthComponent from "../components/auth/auth-component";
import AccountDetails from "../components/auth/account-details";
import {showErrorToast} from "../utils/toasts";

const AuthPage = () => {
    const {user, cognitoUser} = useContext(UserContext);
    if (!cognitoUser) {
        return (<div>
            <div>
                <AuthComponent user={cognitoUser}/>
            </div>
        </div>);
    }
    const signOut = async () => {
      console.log("singout")
        try {
            await Auth.signOut();
        } catch (ex) {
            showErrorToast('Could not sign out!');
        }
    };
    return (<div>
            <AccountDetails user={cognitoUser}/>
            <div>
                <Button
                    large={true}
                    onClick={signOut}
                    intent={Intent.DANGER}
                    icon={'log-out'} text={'Sign Out'} />
            </div>
        </div>
    );
};

export default AuthPage;
