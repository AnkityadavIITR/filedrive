import { auth } from "@/config/firebase";

export const refreshFirebaseToken = async () => {
    try {
      const response=await auth.currentUser.getIdToken(true); 
    //   console.log(response);
      return auth.currentUser.getIdToken(); 
    } catch (error) {
      console.error('Error refreshing Firebase token:', error);
      throw error; // Throw error for handling in calling function
    }
  };

  export const isTokenExpired= () => {
    const currentUser = auth.currentUser;
    if (currentUser && currentUser.getIdTokenResult) {
      return currentUser.getIdTokenResult()
        .then(idTokenResult => {
          const expirationTime = idTokenResult.expirationTime;
          return Date.now() >= expirationTime;
        })
        .catch(error => {
          console.error('Error checking token expiration:', error);
          return true; // Assume token is expired in case of error
        });
    } else {
      return true; // No current user or getIdTokenResult function available
    }
  };