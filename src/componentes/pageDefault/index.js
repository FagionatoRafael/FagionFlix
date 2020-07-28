import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 10%;
    padding-right: 5%;
    padding-left: 5%;
`;

function PageDefault(props) {
    return (
        <>
            <Menu />
                <Main>
                    {props.children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;