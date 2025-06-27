import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const createAccountWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const Googleprovider = new GoogleAuthProvider();
  const Gitprovider = new GithubAuthProvider();

  const userInfo = { createAccountWithEmail, Googleprovider, Gitprovider };
  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
