import React, {useEffect, useState} from 'react';
import {Auth} from 'aws-amplify';
import {updateAuthHeader} from "./axios-auth-header";

export const useUser = () => {
  const [cognitoUser, setCognitoUser] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        const _cognitoUser = await Auth.currentAuthenticatedUser();
        setCognitoUser(_cognitoUser);
        // attach the common headers to axios
        updateAuthHeader(_cognitoUser);
        const username = _cognitoUser.username;
        // const res = await fetchUser(username);
        // setUser(res.data);
      } catch (ex) {
        setUser(null);
      }
    }());
  }, []);
  return {
    cognitoUser,
    user
  };
};
