import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initailizeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';


const LoginForm = () => {
    const [error, setError]  = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({auth}) => ({
        form : auth.login,
        auth : auth.auth,
        authError : auth.authError
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(changeField({
            form : 'login',
            key : name,
            value 
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const { id, password } = form;
        dispatch(login({id, password}));
    }

    // useEffect(() => {
    //     dispatch(initailizeForm('login'));
    // }, [dispatch])

    return <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
    ></AuthForm>

};

export default withRouter(LoginForm);
