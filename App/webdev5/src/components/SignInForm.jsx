import React, { useRef, useState } from 'react';
import {
    Form,
    InputGroup,
    Label,
    Input,
    ForgotPassword,
    ActionButton,
} from './LoginStyles';

import axiosClient from '../axios';

function SignInForm({ setActiveTab, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const contactNumberRef = useRef();


    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {

            email: emailRef.current.value,
            password: passwordRef.current.value,
            contact_number: contactNumberRef.current.value,
            token_name: ""

        }

        console.log(payload);


        axiosClient.post('/login', payload)
        .then(({data})=>{
            console.log(data);
                if (data == 1){
                    console.log("DEV MODE: Bypassing auth with:, { email, password }");
                    console.log("Logged IN")
                    // onLoginSuccess();
                    setIsLoading(false);
                }

                else {
                    setIsLoading(false);
                    console.log("Not Logged in")
                }
            
            // return "Not Logged IN";
            
        })

        
        console.log("gndisn")
        
        // ===== [DEV ONLY] TEMPORARY BYPASS =====
        // console.log("DEV MODE: Bypassing auth with:", { email, password });
        // await new Promise(resolve => setTimeout(resolve, 300)); // Brief delay
        // onLoginSuccess();
        // setIsLoading(false);
        // return;
        // ===== [END DEV CODE] =====
        
        /* REAL AUTH CODE (when ready):
        try {
            const response = await authService.login(email, password);
            if (response.success) {
                onLoginSuccess();
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
        */
    };

    return (
        <Form onSubmit={handleSignIn}>
            <InputGroup>
                <Label>EMAIL ADDRESS</Label>
                <Input
                    type="email"
                    ref = {emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </InputGroup>

            <InputGroup>
                <Label>PASSWORD</Label>
                <Input
                    ref = {passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <ForgotPassword onClick={() => setActiveTab('forgot')}>
                    Forgot password?
                </ForgotPassword>
            </InputGroup>

            <InputGroup>
                <Label>Contact Number</Label>
                <Input
                    ref = {contactNumberRef}
                    type="text"
                    value={contact_number}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
                <ForgotPassword onClick={() => setActiveTab('forgot')}>
                    Forgot password?
                </ForgotPassword>
            </InputGroup>

            <ActionButton type="submit" disabled={isLoading}>
                {isLoading ? 'LOADING...' : 'SIGN IN'}
            </ActionButton>
        </Form>
    );
}

export default SignInForm;