import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { crearNuevoColaboradorAction } from "../actions/colaboradorActions";

const NuevoColaborador = ({history}) => {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");

  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.colaboradores.loading);
  const error = useSelector(state=> state.colaboradores.error);

  console.log(cargando);

  const agregarColaborador = (colaborador) =>
    dispatch(crearNuevoColaboradorAction(colaborador));

  const submitNuevoColaborador = (e) => {
    e.preventDefault();

    agregarColaborador({
      nombre,
      rut,
    });
    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-centar mb-4 font-weight-bold">
              Agregar Nuevo Colaborador
            </h2>
            <form onSubmit={submitNuevoColaborador}>
              <div className="form-group">
                <label> Nombre Colaborador</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre colaborador"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <label> Rut Colaborador</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="rut colaborador"
                  name="rut"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}

            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoColaborador;
