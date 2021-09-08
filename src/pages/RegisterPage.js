import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTamplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
    return (
        <AuthTamplate>
            <AuthForm type="register">
            </AuthForm>
        </AuthTamplate>
    )
};

export default RegisterPage;