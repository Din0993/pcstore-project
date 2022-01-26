import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  padding: 5px 70px;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 100px;
`;

export const SignContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SignInAndSignUpInput = styled.input`
  width: 100%;
  outline: none;
  border: 2px solid gray;
  padding: 10px 8px;
  font-size: 20px;
  border-radius: 5px;
  transition: all 0.4s ease;
  &:active,
  &:focus {
    border: 2px solid blue;
  }
`;
