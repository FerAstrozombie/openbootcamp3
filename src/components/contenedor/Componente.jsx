import { useState } from "react";
import { Usuario } from "../../models/usuario";
import Form from "../pure/form";

function Componente() {
    
    const usuario1 = new Usuario("Fernando", "Lair", true);
    const usuario2 = new Usuario("Nicolas", "Lair", false);
    const usuario3 = new Usuario("Jose", "Lair", true);

    const [usuarios, setUsuarios] = useState([usuario1, usuario2, usuario3]);

    function agregarUsuario(usuario){
        const usuarioTemporal = [...usuarios];
        usuarioTemporal.push(usuario);
        setUsuarios(usuarioTemporal);
    }

    function eliminarUsuario(usuario) {
        const index = usuarios.indexOf(usuario);
        const usuarioTemporal = [...usuarios];
        usuarioTemporal.splice(index, 1);
        setUsuarios(usuarioTemporal);
    }

    return (
        <div>
            <ul>
                { usuarios.map((user, index) => {
                    return(
                        <div key={index}>
                            <li>{ user.nombre} {user.apellido}</li>
                            <span>{ user.conectado ? "Conectado" : "Desconectado" }</span>
                            <button onClick={eliminarUsuario}>Eliminar usuario</button>
                        </div>
                    )
                })}
            </ul>
            <Form add={agregarUsuario} />
        </div>
    )
}

export default Componente