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
        setError(null);
        dispatch(changeField({
            form : 'register',
            key : name,
            value 
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const { id, password, passwordConfirm, username, sms, email } = form;
        let regexPassword = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        let regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        let regexSms = /^\d{3}-\d{3,4}-\d{4}$/;
        if (password !== passwordConfirm) {
            setError("패스워드가 일치하지 않습니다.");
        }
        else if (!regexPassword.test(password)) {
            setError("특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호를 사용해야 합니다.");
        }
        else if (!regexEmail.test(email)) {
            setError("Email형식이 잘못되었습니다.");
        }
        else if (!regexSms.test(sms)) {
            setError("SMS 번호가 잘못되었습니다.");
        }
        else {
            setError(null);
            dispatch(register({id, password, username, sms, email}));
        }
    }

    useEffect(() => {
        dispatch(initailizeForm('register'));
    }, [dispatch])

    useEffect(() => {
        console.log("!!!!!!!!!!useEffect");
        if (auth) {
            console.log("success");
        }
        if (authError) {
            console.log(authError);
            setError("이미 존재하는 아이디입니다.");
        }
    }, [auth, authError, dispatch]);

    return <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
    ></AuthForm>

};

export default withRouter(RegisterForm);