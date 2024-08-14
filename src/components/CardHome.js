import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CardHome = () => {
  const cardInfo = [
    { icon: 'fas fa-receipt', title: '2ª Via Boleto', link: '/boleto2via' },
    { icon: 'fas fa-id-card', title: 'Carteirinha Virtual', link: '/carterinhavirtual' },
    { icon: 'fas fa-calendar-check', title: 'Agendamento de Consulta', link: '/agendamentoconsulta' },
    { icon: 'fas fa-file-invoice-dollar', title: 'Orçamento de Planos', link: '/orcamento' },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardInfo.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className={`${card.icon} fa-3x mb-3`}></i>
                <h5 className="card-title">{card.title}</h5>
              </div>
              <div className="card-footer">
                <a href={card.link} className="btn btn-primary">Acessar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHome;