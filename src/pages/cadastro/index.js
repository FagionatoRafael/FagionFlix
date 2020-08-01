import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/pageDefault';
import FormField from '../../componentes/FormField';
import Button from '../../componentes/Button';
import useForm from '../../hoocks/useForm';

function CadastroCategoria() {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://fagion.herokuapp.com/categorias';
        
        fetch(URL)
        .then(async (response) => {
            if (response.ok) {
                const result = await response.json();
                setCategorias(result);
                return;
            }
            throw new Error('Não foi possível pegar os dados');
        });
    }, []);
        

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                clearForm();
            }}>
                <FormField label='Nome Da Categoria' type='text' name='nome' value={values.nome} onChange={handleChange}/>
                
                <FormField label='Descrição'  type='textarea' name='descricao' value={values.descricao} onChange={handleChange}/>

                <FormField label='Cor'  type='color' name='cor' value={values.cor} onChange={handleChange}/>

                <Button> Cadastrar </Button>
            </form>

            {categorias.length === 0 && (
            <div>
                Loading...
            </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`} >{categoria.nome}</li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;