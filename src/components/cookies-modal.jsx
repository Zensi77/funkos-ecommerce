import React, { useState } from 'react';

export default function CookiesModal() {
  const [showModal, setShowModal] = useState(true);

  const handleAccept = () => {
    setShowModal(false);
    console.log('Cookies accepted!'); // Aquí puedes guardar la preferencia en localStorage si es necesario
  };

  return (
    showModal && (
      <div>
        <div className='modal-backdrop fade show'></div>

        <div
          className='modal fade show'
          style={{ display: 'block' }}
          role='dialog'
        >
          <div
            className='modal-dialog modal-dialog-centered'
            role='document'
          >
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Cookies</h5>
                <button
                  type='button'
                  className='btn-close'
                  aria-label='Close'
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className='modal-body'>
                <p>
                  Usamos cookies para mejorar tu experiencia. ¿Aceptas nuestras
                  políticas?
                </p>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={handleAccept}
                >
                  Aceptar
                </button>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
