import { useForm } from "react-hook-form";
import Button from "../components/Button";
import styled from "styled-components";

const Container = styled.div`
  padding: 120px 56px 56px 56px;

  h3 {
    margin-bottom: 40px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex-basis: 25%;
`;

const Right = styled.div`
  flex-basis: 75%;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
`;

const FormInput = styled.div`
  label {
    display: block;
    margin-bottom: 4px;
    font-size: smaller;
  }
  input {
    width: 100%;
    padding: 10px;
  }
`;

const FormRadio = styled.div`
  margin-right: 24px;
  input {
    display: inline;
    margin-right: 10px;
  }
  label {
    font-size: smaller;
  }
`;

const GroupRadioButtons = styled.div`
  p {
    margin: 0 0 16px 0;
    font-size: smaller;
  }

  div {
    display: flex;
  }
`;

const createAccount = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Left>
          <h3>My account</h3>
          <a>I already have an account</a>
        </Left>
        <Right>
          <h3>Create account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <FormInput>
                <label>First Name</label>
                <input name="firstName" ref={register} />
              </FormInput>
              <FormInput>
                <label>Last Name</label>
                <input name="lastName" ref={register} />
              </FormInput>
              <FormInput>
                <label>Email</label>
                <input name="email" ref={register} />
              </FormInput>
              <GroupRadioButtons>
                <p>Gender</p>
                <div>
                  <FormRadio>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      ref={register}
                    />
                    <label htmlFor="male">Male</label>
                  </FormRadio>
                  <FormRadio>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      ref={register}
                    />
                    <label htmlFor="female">Female</label>
                  </FormRadio>
                </div>
              </GroupRadioButtons>
              <FormInput>
                <label>Password</label>
                <input type="password" name="password" ref={register} />
              </FormInput>
              <FormInput>
                <label>Repeat Password</label>
                <input type="password" name="repeatPassword" ref={register} />
              </FormInput>
            </FormContainer>
            <Button fullWidth type="submit">
              Create account
            </Button>
          </form>
        </Right>
      </Row>
    </Container>
  );
};

export default createAccount;
