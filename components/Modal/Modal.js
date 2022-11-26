import React, {Fragment} from 'react'
import getClass from 'getclass.react'
import {MODAL_TYPES, noop} from '../../constants/appConstants'

const Modal = ({
  title,
  toggle,
  toggleOnClick,
  children,
  onClick,
  isButtonValid,
  type,
}) => {
  const renderDeleteButtons = () => {
    if (type !== MODAL_TYPES.DELETE) return null
    return (
      <Fragment>
        <button className="button is-danger" onClick={onClick} disabled={!isButtonValid}>
          Eliminar
        </button>
        <button className="button" onClick={toggleOnClick}>
          Cancelar
        </button>
      </Fragment>
    )
  }

  const renderTransactionButtons = () => {
    if (type !== MODAL_TYPES.TRANSACTION) return null
    return (
      <Fragment>
        <button
          className={getClass('button is-success', {
            'is-danger is-outlined': !isButtonValid,
            'is-success is-outlined': isButtonValid,
          })}
          onClick={onClick}
          disabled={!isButtonValid}
        >
          Enviar
        </button>
        <button className="button" onClick={toggleOnClick}>
          Cancelar
        </button>
      </Fragment>
    )
  }

  const renderInfoButtons = () => {
    if (type !== MODAL_TYPES.INFO) return null
    return (
      <Fragment>
        <button className="button" onClick={toggleOnClick}>
          Cerrar
        </button>
      </Fragment>
    )
  }

  return (
    <div
      className={getClass('modal px-5 ', {
        'is-active': toggle,
      })}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-size-6-mobile">{title}</p>
          <button className="delete" aria-label="close" onClick={toggleOnClick}></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          {renderTransactionButtons()}
          {renderInfoButtons()}
          {renderDeleteButtons()}
        </footer>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  onClick: noop,
  toggleOnClick: noop,
  toggle: false,
  type: MODAL_TYPES.TRANSACTION,
}

export default Modal
