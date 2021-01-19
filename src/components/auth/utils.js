/**
 * @fileOverview Works with amplify auth utils
 * */

// todo: Create a custom hook that checks events handles user based changes with the hub.
import {Hub, Auth} from 'aws-amplify';
import get from 'lodash/get';

Hub.listen("auth", ({ payload: { event, data } }) => {
  switch (event) {
    case "signIn":
      window.location.reload();
      break;
    case "signOut":
      window.location.reload();
      break;
    default:
      break;
  }
});