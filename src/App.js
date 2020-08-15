import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  const [citas, guardarCitas] = useState([]);

  // Use useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    console.log('Documento listo o algo paso con las citas');
  }, [citas]);

  //Funcion que tome las citas actuales y agregue las nuevas
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id =>{
    //console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}/>
          </div>
          <div className="one-half column"> 
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
              key={cita.id} 
              eliminarCita={eliminarCita}
              cita={cita}/>
            ))}
          </div>
      </div>
    </Fragment>
  );
}

export default App;
