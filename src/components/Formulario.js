import React, {Fragment, useState} from 'react';

const Formulario = () => {

    //Crear el state de citas
    const [cita, actualizarCita] = useState({
        mascota: '', 
        propietario : '',
        fecha : '',
        hora : '', 
        sintomas : ''
    });

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

    return ( 
    <Fragment>
        <h2>Crear cita</h2>
        <form>
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
 
export default Formulario;