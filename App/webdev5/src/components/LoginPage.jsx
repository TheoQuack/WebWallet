import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    BackgroundImage,
    LoginBoxWrapper,
    LoginBox,
    TitleContainer,
    Title,
    Subtitle,
    TabContainer,
    TabButton,
} from './LoginStyles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import loginImage from '../assets/—Pngtree—3d rendered concept illustrating data_5749893.jpg';

function LoginPage({ setIsLoggedIn }) {
    const [activeTab, setActiveTab] = useState('signin');
    const navigate = useNavigate();

    const handleTabClick = (tab) => setActiveTab(tab);

    const handleLoginSuccess = () => {
        
        console.log('Login successful!');
        setIsLoggedIn(true);
        navigate('/dashboard');

    };

    const getTitle = () => {
        switch (activeTab) {
            case 'signup': return 'JOIN NOW!';
            case 'forgot': return 'FORGOT PASSWORD?';
            default: return 'WELCOME!';
        }
    };

    const getSubtitle = () => {
        switch (activeTab) {
            case 'signup': return 'Join to access budgeting tools, savings trackers,\nand financial insights for Philippine users.';
            case 'forgot': return 'No worries! Enter your email to reset your\npassword and regain access to your account.';
            default: return 'Please sign in to your account.';
        }
    };

    return (
        <Container>
            <BackgroundImage src={loginImage} alt="Login background" />
            <LoginBoxWrapper>
                <LoginBox>
                    <TitleContainer>
                        <Title $activeTab={activeTab}>{getTitle()}</Title>
                        <Subtitle $activeTab={activeTab}>{getSubtitle()}</Subtitle>
                    </TitleContainer>

                    <TabContainer>
                        <TabButton $active={activeTab === 'signin'} onClick={() => handleTabClick('signin')}>
                            SIGN IN
                        </TabButton>
                        <TabButton $active={activeTab === 'signup'} onClick={() => handleTabClick('signup')}>
                            SIGN UP
                        </TabButton>
                    </TabContainer>

                    {activeTab === 'signin' && (
                        <SignInForm 
                            setActiveTab={setActiveTab}
                            onLoginSuccess={handleLoginSuccess}
                        />
                    )}
                    {activeTab === 'signup' && <SignUpForm />}
                    {activeTab === 'forgot' && (
                        <ForgotPasswordForm setActiveTab={setActiveTab} />
                    )}
                </LoginBox>
            </LoginBoxWrapper>
        </Container>
    );
}

export default LoginPage;