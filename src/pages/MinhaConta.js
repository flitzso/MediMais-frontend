import React from 'react';
import { Button, Image } from 'react-bootstrap';
import CardHome from '../components/CardHome';

const MinhaConta = ({ user }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        {user?.avatar ? (
          <Image
            src={user.avatar}
            roundedCircle
            className="me-3"
            style={{ width: '60px', height: '60px' }}
          />
        ) : (
          <div
            className="me-3"
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#ccc',
              borderRadius: '50%',
            }}
          ></div>
        )}
        <div>
          <h5 className="mb-0">{user?.name || 'Usuário'}</h5>
        </div>
      </div>

      <Button variant="primary" className="mb-4">
        Editar Informações
      </Button>

      <CardHome />
    </>
  );
};

export default MinhaConta;
