import React, { Component } from 'react';

class Login extends Component {
  render()
    {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                      
                    <h1>Iniciar</h1>                      
                    <p className="text-muted">Registrar cuenta</p>
                      
                    <div className="input-group mb-3">
                        <span className="input-group-addon">
                            <i className="icon-user"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Usuario"/>
                    </div>
                      
                    <div className="input-group mb-4">
                        <span className="input-group-addon">
                            <i className="icon-lock"></i>
                        </span>
                        <input type="password" className="form-control" placeholder="Contraseña"/>
                    </div>
                      
                    <div className="row">
                      <div className="col-6">
                          <button type="button" className="btn btn-primary px-4">Listo</button>
                      </div>
                        
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Ya se te olvido?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Iniciar ya</h2>
                      <p>En caso de tener problemas favor de contactar a su coordinador</p>
                      <button type="button" className="btn btn-primary active mt-3">Registrate ahora!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;