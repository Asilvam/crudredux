const NuevoColaborador = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-centar mb-4 font-weight-bold">
              Agregar Nuevo Colaborador
            </h2>
            <form>
              <div className="form-group">
                <label> Nombre Colaborador</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre colaborador"
                  name="nombre"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoColaborador;
