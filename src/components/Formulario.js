import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        email: ''
    });

    const { nombre, email } = data

    const handleSubmit = e => {
        e.preventDefault()
    }


    const handleInputChange = ({ target }) => { //las llaves para destructurar el target
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        //Montaje

        console.log(`Hola ${nombre}`);
         return () => {
        //     // //desmontaje
        //     // console.log('me estoy desmontando');

        //     //se puede dejar sin el returm

        console.log(`Adios ${nombre}`);
        }
    }, [/*actulizacion, casi siempre van (estados) aqui*/ nombre]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre"
                        name='nombre' value={nombre} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo"
                        name='email' value={email} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Formulario;