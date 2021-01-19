/**
 * @fileOverview Common headers e.g. authorization to be done on axios here
 *   ? switch between test and prod urls
 * */
import axios from 'axios';
import get from 'lodash/get';


export const updateAuthHeader = cognitoUser => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + get(cognitoUser, 'signInUserSession.idToken.jwtToken');
};
