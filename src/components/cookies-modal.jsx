import React, { useEffect, useRef, useState } from 'react';

export default function CookiesModal() {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Iniziaaliar el modal porque si no no se puede usar el método show
    const modal = new bootstrap.Modal(modalRef.current, { backdrop: 'static' });

    if (!localStorage.getItem('cookiesAccepted')) {
      setShowModal(true);
      modal.show();
    }

    // Ocultar el modal cuando se desmonte el componente
    return () => {
      modal.hide();
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowModal(false);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      {showAlert ? (
        <div
          className='alert alert-secondary mx-5'
          role='alert'
          data-bs-dismiss='alert'
          data-aos='fade-down'
          data-aos-once='true'
        >
          Has aceptado el uso de cookies.
        </div>
      ) : null}
      <div
        ref={modalRef}
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex='-1'
        aria-hidden={!showModal}
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Cookies</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={handleAccept}
              ></button>
            </div>
            <div className='modal-body'>
              <p>
                Este sitio web utiliza cookies para mejorar su experiencia de
                navegación y para fines analíticos. Al continuar utilizando este
                sitio, usted acepta el uso de cookies. Puede obtener más
                información sobre las cookies y cómo gestionarlas en nuestra
                Política de Cookies.
              </p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={handleAccept}
              >
                Aceptar
              </button>
              <button
                type='button'
                className='btn btn-ligth'
                data-bs-dismiss='modal'
                onClick={handleAccept}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
