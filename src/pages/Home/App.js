import React, { useEffect, useState } from 'react';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import PageDefault from '../../componentes/pageDefault';
import categoriasRepository from '../../repositories/categorias';

function App() {

  const [dadosIniciais, setDadosInicias] = useState([]);

  //http://localhost:8080/categorias?_embed=videos
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosInicias(categoriasComVideos);
    
    }).catch((err) => {
      console.log(err.message);
    });
   
  }, []);

  return (
    <PageDefault paddingAll={0} style={{ background: "#141414" }}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        const descricao = "Essa é a melhor descricao do mundo!"
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={descricao}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
        );
      }

      return (
        <Carousel
          key={categoria.id}
          category={categoria}
        />
        );
      })}

    </PageDefault>

  );
}

export default App;
