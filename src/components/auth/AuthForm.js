import React from 'react';
import styled from 'styled-components';


const AuthFormBlock = styled.div`
    h3 {
        margin : 0;
        color : white;
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
    border-bottom : 1px solid gray;
`;

const AuthForm = () => {
    return(
        <AuthFormBlock>
            <h3>로그인</h3>
            <AuthInput placeholder="아이디"></AuthInput>
            <AuthInput placeholder="비밀번호" type="password"></AuthInput>
        </AuthFormBlock>
    );
};

export default AuthForm;