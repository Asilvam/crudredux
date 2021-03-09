import  {
  AGREGAR_COLABORADOR,
  AGREGAR_COLABORADOR_EXITO,
  AGREGAR_COLABORADOR_ERROR
} from '../types';

const initialState = {
  colaboradores: [],
  error: null,
  loading: false,
};


const colaboradoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_COLABORADOR:
      return {
        ...state,
        loading:true
      }
      case AGREGAR_COLABORADOR_EXITO:
        return{
          ...state,
          loading:false,
          colaboradores:[ ...state.colaboradores, action.payload]
        }
    default:
      return state;
  }
}

export default colaboradoresReducer;
