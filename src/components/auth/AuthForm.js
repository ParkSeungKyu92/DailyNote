import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
    width : 100%;
    outline : none;
    border : none;
    padding-bottom : 0.5rem;
    padding-top : 0.5rem;
    border-bottom : 1px solid gray;
    border-radius: 5px;
    margin : 2px 0;
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
const typeToString = {
    login : "로그인",
    register : "회원가입"
};

const AuthForm = ({type}) => {
    const text = typeToString[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            {
                type === "register" && (<AuthInput placeholder="이름"></AuthInput>)
            }
            {
                type === "register" && (<AuthInput placeholder="생년월일"></AuthInput>)
            }
            <AuthInput placeholder="아이디"></AuthInput>
            <AuthInput placeholder="비밀번호" type="password"></AuthInput>
            {
                type === "register" && (<AuthInput placeholder="비밀번호 확인" type="password"></AuthInput>)
            }
            {
                type === "register" && (<AuthInput placeholder="이메일"></AuthInput>)
            }
            {
                type === "register" && (<AuthInput placeholder="핸드폰"></AuthInput>)
            }
            
            <Spacer></Spacer>
            <AuthButton>{text}</AuthButton>
            <Footer>
                <Link>아이디 찾기</Link>
                <Link>패스워드 찾기</Link>
                {
                    type === "login" ? <Link to='/register'>회원가입</Link> : <Link to='/login'>로그인</Link>
                }
            </Footer>
        </AuthFormBlock>

    );
};

export default AuthForm;