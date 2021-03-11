import {
  AGREGAR_COLABORADOR,
  AGREGAR_COLABORADOR_EXITO,
  AGREGAR_COLABORADOR_ERROR,
} from "../types";

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function crearNuevoColaboradorAction(colaborador) {
  return async (dispatch) => {
    dispatch(agregarColaborador());
    try {
      await clienteAxios.post('/api/colaboradores', colaborador);
      dispatch(agregarColaboradorExito(colaborador));
      Swal.fire(
        'Correcto',
        'Los datos se agregaron correctamente',
        'success'
      )
    } catch (error) {
      dispatch(agregarColaboradorError(true));
      Swal.fire({
        icon:'error',
        title:'error',
        text:'Hubo un eror, intenta de nuevo'
      })
    }
  };
}

const agregarColaborador = () => ({
  type: AGREGAR_COLABORADOR,
  payload:true
});

const agregarColaboradorExito = colaborador =>({
    type: AGREGAR_COLABORADOR_EXITO,
    payload: colaborador
})

const agregarColaboradorError = estado=>({
    type: AGREGAR_COLABORADOR_ERROR,
    payload: estado

})