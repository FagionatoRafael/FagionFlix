import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/pageDefault';
import FormField from '../../componentes/FormField';
import Button from '../../componentes/Button';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        });
    }

    function handleChange(event) {

        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm
    }
}

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
        .then( async (respostaServidor) => {
            const resposta = await respostaServidor.json();
            setCategorias([...resposta,]);
        });
    });

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