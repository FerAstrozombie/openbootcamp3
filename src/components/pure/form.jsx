import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Usuario } from '../../models/usuario';

const Form = ({ add }) => {
    const nombreRef = useRef("");
    const apellidoRef = useRef("");
    const conectadoRef = useRef(Boolean);

    function agregarUsuario(e){
        e.preventDefault();
        const nuevoUsuario = new Usuario(
            nombreRef.current.value,
            apellidoRef.current.value,
            conectadoRef.current.value
        );
        add(nuevoUsuario);
    }

    return (
        <form onSubmit={agregarUsuario}>
            <div>
                <input ref={nombreRef} id='inputNombre' type="text" required autoFocus placeholder='Nombre'/>
                <input ref={apellidoRef} id='inputApellido' type="text" required placeholder='Apellido' />
                <label htmlFor="selectLevel">Conectado</label>
                <select ref={conectadoRef} defaultValue={true} id="selectLevel">
                    <option value={true}>
                        Conectado
                    </option>
                    <option value={false}>
                        Desconectado
                    </option>
                </select>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
};


Form.propTypes = {
    add: PropTypes.func.isRequired
};


export default Form;
