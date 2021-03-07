import Header from "./components/Header";
import Colaboradores from "./components/Colaboradores";
import NuevoColaborador from "./components/NuevoColaborador";
import EditarColaborador from "./components/EditarColaborador";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import{Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store} > 
      <Header />
      <div className="container mt-5">
        <Switch>
            <Route exact path="/" component={Colaboradores}/>
            <Route exact path="/colaboradores/nuevo" component={NuevoColaborador}/>
            <Route exact path="/colaboradores/editar/:id" component={EditarColaborador}/>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
