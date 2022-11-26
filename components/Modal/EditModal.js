import React, {Fragment, useState, useEffect, Children, isValidElement} from 'react'
import {MODAL_TYPES} from '../../constants/appConstants'
import Modal from './Modal'

const EditModal = ({getModalHandler, postModalHandler, modalTitle, children}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [modalInfo, setModalInfo] = useState({})
  const [hasModalInfo, setHasModalInfo] = useState(false)
  const [fetchModalInfo, setFetchModalInfo] = useState(false)

  const onButtonClick = () => {
    if (hasModalInfo) {
      setModalToggle(true)
      setFetchModalInfo(false)
    } else {
      setFetchModalInfo(true)
    }
  }

  const handleActionModal = async () => {
    await postModalHandler()
    setModalToggle(false)
  }

  const handleCloseModal = () => {
    setModalToggle(false)
    setFetchModalInfo(false)
  }

  useEffect(() => {
    if (!fetchModalInfo) return
    const modalHandler = async () => {
      const res = await getModalHandler()
      console.log('** res modalHandler', res)
      setModalInfo(res.data)
      setHasModalInfo(true)
      setModalToggle(true)
    }
    modalHandler()
  }, [fetchModalInfo])

  const childWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return React.cloneElement(child, {modalInfo})
    }
    return child
  })

  return (
    <Fragment>
      <button
        class=" is responsive inline-block mr-1 px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={onButtonClick}
      >
        Editar
      </button>
      {modalToggle && (
        <Modal
          title={modalTitle}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          type={MODAL_TYPES.TRANSACTION}
          onClick={handleActionModal}
        >
          {childWithProps}
        </Modal>
      )}
    </Fragment>
  )
}

export default EditModal
