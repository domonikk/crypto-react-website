import React from 'react'
import { Container, FormWrap,Icon,Form,FormH1,FormButton, FormContent, FormInput, FormLabel,Text } from './SignInElements'

const SignIn = () => {
    return (
        <> 
        <Container> 
            <FormWrap>
                <Icon to="/">dolla</Icon> 
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your Account</FormH1> 
                        <FormLabel htmlFor='for'>Email</FormLabel> 
                          <FormInput type='email' required/> 
                          <FormLabel htmlFor='for'> Password</FormLabel> 
                          <FormInput type='password' required/> 
                          <FormButton type='submit'>Continue</FormButton> 
                          <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    );
};

export default SignIn
