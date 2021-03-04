import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD - REACT Test
          </Link>
        </h1>
      </div>
      <Link
        to={"/colaboradores/nuevo"}
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
      >
        {" "}
        Agregar Colaborador &#43;
      </Link>
    </nav>
  );
};
export default Header;
