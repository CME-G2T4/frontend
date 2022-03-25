import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "ap-southeast-1_4AzbN72EW",
  ClientId: "75mrhc6aumscg1hamtht2aescj"
};

// export const UserPool = new CognitoUserPool(poolData);
export default new CognitoUserPool(poolData);