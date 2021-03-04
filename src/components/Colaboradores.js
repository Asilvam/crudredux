import { Fragment } from "react";

const Colaboradores = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Colaboradores</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th>Nombre</th>
            <th>Rut</th>
            <th>Estado</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Colaboradores;
