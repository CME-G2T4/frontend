import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../userPool/UserPool';

const AccountContext = createContext();

const api_link = "https://rbspz3g100.execute-api.ap-northeast-1.amazonaws.com/api/v1";

const Account = props => {
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log('onSuccess:');
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:');
          reject(err);
        },

        newPasswordRequired: function(userAttributes, requiredAttributes) {
          console.log('newPasswordRequired:', userAttributes);
          // User was signed up by an admin and must provide new
          // password and required attributes, if any, to complete
          // authentication.
      
          // the api doesn't accept this field back
          // delete userAttributes.email_verified;
      
          // unsure about this field, but I don't send this back
          // delete userAttributes.phone_number_verified;
      
          // Get these details and call
          user.completeNewPasswordChallenge(Password, requiredAttributes, this);
          resolve(Pool.getCurrentUser());
          // resolve(user);
      }
      });
    });
  }
    
  
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      console.log("Logged out");
    }
  }

  return (
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout,
      api_link
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };