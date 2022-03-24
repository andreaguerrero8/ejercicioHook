import React, { useEffect, useState } from 'react'

const Cards = ({ categoria }) => {

    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        imgGif(categoria)
        .then( // como es uba promesa se resuelve con .then
            imgData => setImagenes(imgData))
    }, [categoria]);

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=3ZcPSgYBnmp3vG5EyOUoPYPlbexQe1zr`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.original.url
            }
        })

        return imgData
    }

    imgGif()

    return (
        <div>
            <ol>
                {
                    imagenes.map(img => (
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt="imagen"/>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Cards