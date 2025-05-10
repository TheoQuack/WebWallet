import React, { useState } from 'react';
import {
    Form,
    InputGroup,
    Label,
    Input,
    ActionButton,
} from './LoginStyles';

function ForgotPasswordForm({ setActiveTab }) {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            alert('Password successfully reset!');
            setActiveTab('signin');
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <Form onSubmit={handleForgotPassword}>
            <InputGroup>
                <Label>EMAIL ADDRESS</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </InputGroup>

            <InputGroup>
                <Label>NEW PASSWORD</Label>
                <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </InputGroup>

            <InputGroup>
                <Label>CONFIRM PASSWORD</Label>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </InputGroup>

            <ActionButton type="submit">SIGN IN</ActionButton> {/* Original button text was SIGN IN */}
        </Form>
    );
}

export default ForgotPasswordForm;