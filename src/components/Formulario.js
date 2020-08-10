import React, {Fragment} from 'react';

const Formulario = () => {
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
            ></input>

            <label>Nombre dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
            ></input>

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
            ></input>
            

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
            >
            </input>


        </form>
    </Fragment>
     );
}
 
export default Formulario;