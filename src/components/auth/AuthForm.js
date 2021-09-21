import React, { useState , useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const AuthFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        margin : 0;
        color : black;
        margin-bottom : 1rem;
        text-align : center;
    }
`;

const AuthInput = styled.input`
    font-size : 1rem;
    width : 99%;
    outline : none;
    border : 1px solid gray;
    padding-bottom : 0.5rem;
    padding-top : 0.5rem;
    border-radius: 5px;
    margin : 8px 0;
    box-shadow 0 0 8px rgba(0,0,0,0.25);
`;

const Spacer = styled.div`
    height : 1rem;
`;

const AuthButton = styled.button`
    font-size : 1rem;
    margin: 0;
    padding: 0.5rem 1rem;
    width : 100%;
    text-align : center;
    color : white;
    text-decoration: none;
    display: inline-block;
    background : #03c75a;
    cursor: pointer;
    border: none;
    border-radius: 5px;    
`;

const Footer = styled.div`
    margin-top : 2rem;
    text-align : left;
    a {
        display : inline-block;
        color : black;
        text-decoration : underline;
        &:hover {
            color : black;
        }
    }
    a + a {
        padding-left : 20px;
    }
    a:last-child {
        text-align : right;
    }
`;

const ErrorMsg = styled.div`
    font-size : 1rem;
    text-align : left;
    color : #ff003e;
    margin-top : 1rem;
    white-space: pre-wrap;
`;

const typeToString = {
    login : "로그인",
    register : "회원가입"
};

const AuthForm = ({
    type, form, onChange, onSubmit, error}) => {
    const text = typeToString[type];

    return(
        <div>
            <AuthFormBlock>            
                <h3>{text}</h3>
                <form onSubmit={onSubmit}>
                    <AuthInput onChange={onChange} value={form.id} name='id' placeholder="아이디"></AuthInput>
                    <AuthInput onChange={onChange} value={form.password} name='password' placeholder="비밀번호" type="password"></AuthInput>
                    {
                        type === "register" && (<AuthInput value={form.passwordConfirm} onChange={onChange} name='passwordConfirm' placeholder="비밀번호 확인" type="password"></AuthInput>)
                    }
                    {
                        type === "register" && (<AuthInput value={form.username} onChange={onChange} name='username' placeholder="이름"></AuthInput>)
                    }
                    {
                        type === "register" && (<AuthInput value={form.email} onChange={onChange} name='email' placeholder="이메일"></AuthInput>)
                    }
                    {
                        type === "register" && (<AuthInput value={form.sms} onChange={onChange} name='sms' placeholder="핸드폰"></AuthInput>)
                    }
                    <Spacer></Spacer>
                    <AuthButton>{text}</AuthButton>
                </form>
                {
                    error && <ErrorMsg>{error}</ErrorMsg>
                }
                <Footer>
                    <Link to='/'>아이디 찾기</Link>
                    <Link to='/'>패스워드 찾기</Link>
                    {
                        type === "login" ? <Link to='/register'>회원가입</Link> : <Link to='/login'>로그인</Link>
                    }
                </Footer>
            </AuthFormBlock>
        </div>
    );
};

export default AuthForm;