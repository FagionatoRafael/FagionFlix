import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/pageDefault';

function cadastroVideo() {
    return (
        <>
            <PageDefault>
                <h1>Cadastro de video</h1>

                <Link to="/cadastro/categoria">
                    Cadastro de categoria
                </Link>
            </PageDefault>
        </>
    );
}

export default cadastroVideo;