import React from 'react';
import styled from 'styled-components';

const AuthTamplateBlock = styled.div`
    position : absolute;
    left : 0;
    top : 0;
    bottom : 0;
    right : 0;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const Box = styled.div`
    padding : 2rem;
    background : #fff;
    box-shadow 0 0 8px rgba(0,0,0,0.25);
    width : 400px;
    border-radius : 2px;
`;

const AuthTamplate = ({children}) => {
    return (
        <AuthTamplateBlock>
            <Box>{children}</Box>
        </AuthTamplateBlock>
    );
};

export default AuthTamplate;