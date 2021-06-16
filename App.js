import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase/app";
import firebaseConfig from "./src/firebase.config";

// const firebaseConfig = {
//   apiKey: "AIzaSyCxIANnk4_ejlNe6uxiqWtg8rP54qo8RZI",
//   authDomain: "facebook-auth-554b1.firebaseapp.com",
//   databaseURL: "https://facebook-auth-554b1-default-rtdb.firebaseio.com",
//   projectId: "facebook-auth-554b1",
//   storageBucket: "facebook-auth-554b1.appspot.com",
//   messagingSenderId: "313512590537",
//   appId: "1:313512590537:web:0bc5de8f32392afa8da118"
// };

  firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;