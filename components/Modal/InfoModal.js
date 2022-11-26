import React, {Fragment, useState, useEffect, Children, isValidElement} from 'react'
import {MODAL_TYPES} from '../../constants/appConstants'
import Modal from './Modal'

const InfoModal = ({getModalHandler, modalTitle, children}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [modalInfo, setModalInfo] = useState({})
  const [fetchModalInfo, setFetchModalInfo] = useState(false)

  const onButtonClick = () => {
    setFetchModalInfo(true)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
    setFetchModalInfo(false)
  }

  useEffect(() => {
    if (!fetchModalInfo) return
    const modalHandler = async () => {
      const res = await getModalHandler()
      setModalInfo(res.data)
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
      <button class="is-responsive inline-block margin-30 mr-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={onButtonClick}>
        Info
      </button>
      {modalToggle && (
        <Modal
          title={modalTitle}
          toggle={modalToggle}
          isButtonValid={false}
          toggleOnClick={handleCloseModal}
          type={MODAL_TYPES.INFO}
        >
          {childWithProps}
        </Modal>
      )}
    </Fragment>
  )
}

export default InfoModal
