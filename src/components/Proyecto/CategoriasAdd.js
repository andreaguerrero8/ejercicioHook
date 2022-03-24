import React, { useEffect, useRef, useState } from 'react'

const CategoriasAdd = ({setCategorias}) => {

    const [search, setSearch] = useState('')
    const searchref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategorias(categorias=>[search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])
    
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    ref={searchref}
                    name="search"
                    placeholder="categorias"
                    value={search}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}

export default CategoriasAdd