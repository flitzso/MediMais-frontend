import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Sobre
              </h6>
              <p>
              MedMais e uma empresa que presa pela atenção aos clientes da nossa clinica, comodidade para reservar suas consultas e exames de rotina.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>MediMais</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Sobe a MediMais
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Imprensa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Baixar o aplicativo
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tabalhe na MediMais
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Informações</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dúvidas frequentes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Regulamento de oferta
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Destinos internacionais
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Canal de transparencia
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 MediMais:
        <a className='text-reset fw-bold' href='https://www.linkedin.com/in/flitzoliveira/'>
          Flitzso
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;