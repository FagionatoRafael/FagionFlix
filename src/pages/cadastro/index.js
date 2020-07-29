import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../componentes/pageDefault';
import FormField from '../../componentes/FormField';

function CadastroCategoria() {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const [categorias, setCategorias] = useState([]);
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

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                <FormField label='Nome Da Categoria:' type='text' name='nome' value={values.nome} onChange={handleChange}/>
                
                <div>
                    <label>
                    Descrição:
                    <textarea type="text" name='descricao' value={values.descricao} onChange={handleChange} />
                    </label>
                </div>
                
                <FormField label='Cor:'  type='color' name='cor' value={values.cor} onChange={handleChange}/>
                

                <button> Cadastrar </button>
            </form>

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