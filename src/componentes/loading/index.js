import React, { useState, useEffect } from 'react';

import loadingGif from '../../assets/img/image.gif'

function loading() {     
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 100}}>
            <img src={loadingGif} alt="carregando" style={{width: 100, height: 100}}/>
            <h3>Carregando...</h3>
        </div>
    );
}

export default loading;