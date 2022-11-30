import React, {Fragment, useState, useEffect, Children, isValidElement} from 'react'
import {MODAL_TYPES} from '../../constants/appConstants'
import Modal from './Modal'

const DeleteModal = ({deleteModalHandler, modalTitle, children}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [makeDelete, setMakeDelete] = useState(false)

  const onButtonClick = () => {
    setModalToggle(true)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
  }

  useEffect(() => {
    if (!makeDelete) return
    const modalHandler = async () => {
      await deleteModalHandler()
      setModalToggle(false)
    }
    modalHandler()
  }, [makeDelete])

  return (
    <Fragment>
      <button class=" is-responsive inline-block px-3 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={onButtonClick}>
        Eliminar
      </button>
      {modalToggle && (
        <Modal
          title={modalTitle}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          type={MODAL_TYPES.DELETE}
          onClick={() => setMakeDelete(true)}
        >
          {children}
        </Modal>
      )}
    </Fragment>
  )
}

export default DeleteModal
