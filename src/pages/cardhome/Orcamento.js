import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Orcamento = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">ORÇAMENTO DE PLANOS</h5>
                <h6 className="text-center">Plano Ambulatorial Quality</h6>
                <p className="text-center">O Menor custo benefício do mercado</p>
                <p className="text-center">Valor para planos Individual, Familiar e Empresarial</p>
                <p className="text-center"><strong>ÁREA DE ABRANGÊNCIA DO PLANO: SÃO PAULO - SP</strong></p>

                <form>
                  <div className="form-group">
                    <label>Tipo do plano</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="planType" id="individual" value="individual" />
                      <label className="form-check-label" htmlFor="individual">
                        Individual
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="planType" id="familiar" value="familiar" />
                      <label className="form-check-label" htmlFor="familiar">
                        Familiar
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="planType" id="empresarial" value="empresarial" />
                      <label className="form-check-label" htmlFor="empresarial">
                        Empresarial
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" placeholder="Digite seu nome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Digite seu telefone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cell">Celular</label>
                    <input type="text" className="form-control" id="cell" placeholder="Digite seu celular" />
                  </div>

                  <div className="form-group">
                    <label>Informe a quantidade de beneficiários por faixa etária</label>
                    {[
                      { label: '00-18', id: 'age-00-18' },
                      { label: '19-23', id: 'age-19-23' },
                      { label: '24-28', id: 'age-24-28' },
                      { label: '29-33', id: 'age-29-33' },
                      { label: '34-38', id: 'age-34-38' },
                      { label: '39-43', id: 'age-39-43' },
                      { label: '44-48', id: 'age-44-48' },
                      { label: '49-53', id: 'age-49-53' },
                      { label: '54-58', id: 'age-54-58' },
                      { label: 'Acima de 59', id: 'age-above-59' },
                    ].map((range, index) => (
                      <div className="form-group row" key={index}>
                        <label className="col-sm-4 col-form-label">{range.label}</label>
                        <div className="col-sm-8">
                          <input type="number" className="form-control" id={range.id} defaultValue="0" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Simular</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orcamento;
