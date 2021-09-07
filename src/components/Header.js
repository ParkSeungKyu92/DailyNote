import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderBlock = styled.div`
    postion : fixed;
    width : 100%;
    background : gray;
`;

const Wrapper = styled.div`
    height : 4rem;
    display : flex;
    align-items : center;
    margin-left : 40%;
    .logo {
        font-size : 1.5rem;
        font-weight : 800;
        text-decoration: none;
    }
`;

const Spacer = styled.div`
    height : 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link className='logo' to='/'> 
                        Welcome To Daily Note!
                    </Link>
                </Wrapper>
            </HeaderBlock>
            {/* <Spacer></Spacer> */}
        </>
    );
};

export default Header;