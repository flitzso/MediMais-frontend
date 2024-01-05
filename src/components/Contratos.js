import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contratos.css';

const Contratos = () => {
  const cardsData = [
    {
      title: 'Basico',
      price: '49.99',
      features: ['Sua agenda colocada on-line em seu website', 'Listagem no site da MediMais', 'Preencher os cancelamentos'],
    },
    {
      title: 'Pro',
      price: '199.99',
      features: ['Todos os recursos do Plano Básico', 'Suporte por telefone durante o horário comercial', 'Promoção em toda MediMais'],
    },
    {
      title: 'Ilimitado',
      price: '499.99',
      features: ['Todos os recursos do Plano Pro', 'Lembretes por e-mail', 'Suporte por telefone e e-mail 24 horas por dia'],
    },
  ];

  return (
    <div className="contratoTop container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className={`col-md-4 ${index === 1 ? 'special-card' : ''}`}>
            <div className="card text-center">
              <div className="card-header">
                <h5 className="card-title">{card.title}</h5>
              </div>
              <div className="card-body">
                <h3 className="card-title">${card.price}</h3>
                <ul className="list-group">
                  {card.features.map((feature, featureIndex) => (
                    <li className="list-group-item" key={featureIndex}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn1 mt-3">
                  Contratar Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contratos;
