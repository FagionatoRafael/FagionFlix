import config from '../config';

const URL_categorias = `${config.URL_BACK_END}/categorias`;

function getAll() {
    return fetch(`${URL_categorias}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
    return fetch(`${URL_categorias}?_embed=videos`)
    .then(async (response) => {
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    });
}

export default {
    getAllWithVideos,
    getAll,
};