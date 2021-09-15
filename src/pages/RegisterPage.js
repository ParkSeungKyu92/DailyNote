import React from 'react';
import AuthTamplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthTamplate>
            <RegisterForm>
            </RegisterForm>
        </AuthTamplate>
    )
};

export default RegisterPage;