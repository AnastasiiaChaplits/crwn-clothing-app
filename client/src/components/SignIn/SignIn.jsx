import { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput";
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../CustomButton/CustomButton";
import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styled";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const SignIn = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { password, email } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = props;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { googleSignInStart } = props;
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="email"
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          required
          handleChange={handleChange}
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
