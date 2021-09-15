import React from 'react';
import AuthTamplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTamplate>
            <LoginForm>
            </LoginForm>
        </AuthTamplate>
    )
};

export default LoginPage;