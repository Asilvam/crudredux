import {
  AGREGAR_COLABORADOR,
  AGREGAR_COLABORADOR_EXITO,
  AGREGAR_COLABORADOR_ERROR,
} from "../types";

import clienteAxios from '../config/axios';

export function crearNuevoColaboradorAction(colaborador) {
  return async (dispatch) => {
    dispatch(agregarColaborador());
    try {
      await clienteAxios.post('/api/colaboradores', colaborador);
      dispatch(agregarColaboradorExito(colaborador));
    } catch (error) {
      dispatch(agregarColaboradorError(true));
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