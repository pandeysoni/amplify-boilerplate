

// Create a context so that any component at any level
//  of nesting can access the details.
import React from "react";

// Track the cognito user
export const UserContext = React.createContext({});
UserContext.displayName = 'UserContext';
