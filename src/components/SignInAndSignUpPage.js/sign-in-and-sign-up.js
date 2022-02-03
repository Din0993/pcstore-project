import React from "react";
import { useSelector } from "react-redux";
import {
  SignInAndSignUpContainer,
  SignContainer,
  SignInAndSignUpInput,
} from "./sign-in-and-sign-up.style";

const SignInAndSignUp = () => {
  const state = useSelector((state) => state.account);
  console.log(state);

  return (
    <div>
      <SignInAndSignUpContainer>
        <SignContainer>
          <h2>Sign In</h2>
          <SignInAndSignUpInput type="email" placeholder="Email" />
          <SignInAndSignUpInput type="password" placeholder="Password" />
        </SignContainer>
        <SignContainer>
          <h2>Sign Up</h2>
          <SignInAndSignUpInput type="text" placeholder="First Name" />
          <SignInAndSignUpInput type="text" placeholder="Last Name" />
          <SignInAndSignUpInput type="email" placeholder="Email" />
          <SignInAndSignUpInput type="password" placeholder="Password" />
        </SignContainer>
      </SignInAndSignUpContainer>
    </div>
  );
};
export default SignInAndSignUp;
