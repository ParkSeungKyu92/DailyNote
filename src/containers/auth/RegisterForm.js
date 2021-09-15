import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initailizeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';


const RegisterForm = () => {
    const [error, setError]  = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({auth}) => ({
        form : auth.register,
        auth : auth.auth,
        authError : auth.authError
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(changeField({
            form : 'register',
            key : name,
            value 
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const { id, password, username, sms, email } = form;
        dispatch(register({id, password, username, sms, email}));
    }

    // useEffect(() => {
    //     dispatch(initailizeForm('login'));
    // }, [dispatch])

    return <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
    ></AuthForm>

};

export default withRouter(RegisterForm);