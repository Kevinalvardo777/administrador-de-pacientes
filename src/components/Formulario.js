import React, {Fragment, useState} from 'react';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear el state de citas
    const [cita, actualizarCita] = useState({
        mascota: '', 
        propietario : '',
        fecha : '',
        hora : '', 
        sintomas : ''
    });

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que un usuario escribe un post
    const actualizarState = e =>{
        //console.log(e.target.value);
        actualizarCita({
            //ponemos una copia de la cita, para que no perdamos la referencia de los demas campos del objeto
            ...cita, 
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores con destructuring
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e =>{
        //alert('enviando...')
        e.preventDefault();
        //console.log('Enviando form...')

        //Validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === ''){
            //console.log('Hay un error')
            actualizarError(true);
            return;
        }

        //Eliminar mensake previo de error
        actualizarError(false);

        //instalar npm uuid, libreria que genera un id grande
        cita.id = uuid();

        console.log(cita);
        //Asignar un ID

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '', 
            propietario: '',
            fecha: '',
            hora: '', 
            sintomas: ''
        })
    }

    return ( 
    <Fragment>
        <h2>Crear cita</h2>
        { error ? <p className="alerta-error"> Todos los campos son obligatorios</p>
        : null}
        <form
            onSubmit={submitCita}
        >
            <label>Nombre mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre mascota"
                onChange={actualizarState}
                value = {mascota}
            ></input>

            <label>Nombre dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value = {propietario}
            ></input>

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value = {fecha}
            ></input>
            

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value = {hora}
            >
            </input>

            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value = {sintomas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>

        </form>
    </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;