    import React, { useRef, useState } from 'react';
    import {
        Form,
        InputGroup,
        Label,
        Input,
        ActionButton,
    } from './LoginStyles';
    import axiosClient from '../axios';
    

    function SignUpForm() {
        const [email, setEmail] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [password, setPassword] = useState('');

        const emailRef = useRef();
        const contactNumberRef = useRef();
        const passwordRef = useRef();


        const handleSignUp = (e) => {
            e.preventDefault();
            const payload = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                contact_number: contactNumberRef.current.value
            }
            axiosClient.post('/signup', payload)
                .then(({data})=>{
                    console.log(data);
                })

            alert(`Creating account with email: ${email} and contact: ${contactNumber}`);
        };

        return (
            <Form onSubmit={handleSignUp}>
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
                    <Label>CONTACT NUMBER</Label>
                    <Input
                        ref={contactNumberRef}
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </InputGroup>

                <InputGroup>
                    <Label>PASSWORD</Label>
                    <Input
                        ref={passwordRef}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </InputGroup>

                <ActionButton type="submit">SIGN UP</ActionButton>
            </Form>
        );
    }

    export default SignUpForm;