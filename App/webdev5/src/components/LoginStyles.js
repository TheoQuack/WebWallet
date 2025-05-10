import styled, { css } from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    font-family: 'Kanit', sans-serif;
`;

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

const LoginBoxWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 30%;
    min-width: 380px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const LoginBox = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 40px;
`;

const TitleContainer = styled.div`
    margin-bottom: 15px;
    margin-top: -20px;
`;

const Title = styled.h1`
    font-weight: 800;
    margin-bottom: -100px;
    color: #008080;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.2;
    position: relative;
    top: -85px;
    margin-top: 80px;

    ${({ $activeTab }) => $activeTab === 'signin' && css`
        font-size: 64px;
    `}

    ${({ $activeTab }) => $activeTab === 'signup' && css`
        font-size: 64px;
    `}

    ${({ $activeTab }) => $activeTab === 'forgot' && css`
        font-size: 48px;
    `}
`;

const Subtitle = styled.p`
    color: #666;
    margin-bottom: 15px;
    text-align: center;
    white-space: pre-line;
    line-height: 1.5;
    font-family: 'Kanit', sans-serif;
    font-weight: 400;

    ${({ $activeTab }) => $activeTab === 'signin' && css`
        font-size: 24px;
    `}

    ${({ $activeTab }) => $activeTab === 'signup' && css`
        font-size: 14px;
    `}

    ${({ $activeTab }) => $activeTab === 'forgot' && css`
        font-size: 15px;
    `}
`;

const TabContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    gap: 70px;
    justify-content: center;
`;

const TabButton = styled.button`
    width: 140px;
    height: 75px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    border-radius: 24px;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    background-color: ${props => props.active ? '#008080' : '#d9d9d9'};
    color: ${props => props.active ? 'white' : 'white'};
    border: ${props => props.active ? 'none' : '1px solid #ddd'};
    font-style: ${props => props.active ? 'italic' : 'normal'};

    &:hover {
        background-color: ${props => props.active ? '#008080' : '#e9e9e9'};
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 55px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const Label = styled.label`
    font-size: 12px;
    font-weight: 1000;
    color: #7C7C7C;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
    width: 350px;
    height: 25px;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.2s;
    background-color: #f8f8f8;
    color: #333;

    &:focus {
        outline: none;
        border-color: #008080;
        box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.1);
    }
`;

const ForgotPassword = styled.span`
    align-self: flex-end;
    font-size: 12px;
    color: #7C7C7C;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;

const ActionButton = styled.button`
    width: 100%;
    height: 70px;
    padding: 14px;
    background-color: #008080;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    font-family: 'Kanit', sans-serif;
    margin-top: 50px;

    &:hover {
        background-color: #006666;
    }
`;

export {
    Container,
    BackgroundImage,
    LoginBoxWrapper,
    LoginBox,
    TitleContainer,
    Title,
    Subtitle,
    TabContainer,
    TabButton,
    Form,
    InputGroup,
    Label,
    Input,
    ForgotPassword,
    ActionButton,
};