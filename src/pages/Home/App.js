import React, { useEffect, useState } from 'react';
import Menu from '../../componentes/Menu';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import PageDefault from '../../componentes/pageDefault';
import Footer from '../../componentes/Footer';
import categoriasRepository from '../../repositories/categorias';

function App() {

  const [dadosIniciais, setDadosInicias] = useState({
    categorias: []
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosInicias(categoriasComVideos);
    
    }).catch((err) => {
      console.log(err.message);
    });
   
  }, []);

//http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0} style={{ background: "#141414" }}>

      {dadosIniciais.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
          videoTitle={dadosIniciais[0].videos[0].nome}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}

      {/*<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />*/}      

    </PageDefault>

  );
}

export default App;
