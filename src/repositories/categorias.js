import config from '../config';

const URL_categorias = `${config.URL_BACK_END}/categorias`;

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

};