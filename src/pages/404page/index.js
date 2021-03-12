import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/pageDefault';
import warningPage from '../../assets/img/warning.png'

function page404() {     
    return (
        <PageDefault>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img src={warningPage} alt="pagina erro" style={{width: 100, height: 100}}/>
                <h1>Pagina 404</h1>
                <h3>Pagina não encontrada!</h3>
            </div>
        </PageDefault>
    );
}

export default page404;