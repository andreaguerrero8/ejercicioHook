import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import CategoriasAdd from './CategoriasAdd';
import CategoriasList from './CategoriasList';

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState(['Horror']);

    // const handleAdd = () => {
    //     setCategorias(
    //         [...categorias, 'Comedia']
            
    //     )
    // }

    return (
        <div>
            <h1>Componentes con hooks</h1>
            <ol>
                <CategoriasAdd setCategorias={setCategorias}/>
                <CategoriasList categoria={categorias} />
            </ol>
        </div>
    )
}

export default CategoriasApp