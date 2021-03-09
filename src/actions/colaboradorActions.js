import colaboradoresReducer from "../reducers/colaboradoresReducer";
import {
  AGREGAR_COLABORADOR,
  AGREGAR_COLABORADOR_EXITO,
  AGREGAR_COLABORADOR_ERROR,
} from "../types";

export function crearNuevoColaboradorAction(colaborador) {
  return (dispatch) => {
    dispatch(agregarColaborador());
    try {
      dispatch(agregarColaboradorExito(colaborador));
    } catch (error) {
      dispatch(agregarColaboradorError(true));
    }
  };
}

const agregarColaborador = () => ({
  type: AGREGAR_COLABORADOR,
});

const agregarColaboradorExito = colaborador =>({
    type: AGREGAR_COLABORADOR_EXITO,
    payload: colaborador
})

const agregarColaboradorError = ()=>({
    type: AGREGAR_COLABORADOR_ERROR,
   

})