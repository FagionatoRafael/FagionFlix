import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/pageDefault';

function cadastroCategoria() {
    return (
        <>
            <PageDefault>
                <h1>Cadastro de categoria</h1>

                <Link to="/">
                    Ir para Home
                </Link>
            </PageDefault>
        </>
    );
}

export default cadastroCategoria;