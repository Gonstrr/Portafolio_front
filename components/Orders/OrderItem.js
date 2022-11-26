import React from 'react'
import InfoModal from '../Modal/InfoModal'
import DeleteModal from '../Modal/DeleteModal'
import {
  deleteOrder,
  fetchOrderInfoHandler,
  updateOrderHandler,
} from './helpers/OrderHandlers'
import {DeleteOrderInfo, OrderInfoForm} from './helpers/OrderComponents'
import EditModal from '../Modal/EditModal'
import useEditableForm from '../../utils/useEditableForm'
import {DOMAINS} from '../../constants/appConstants'

const OrderDelete = ({id, status, actions}) => {
  return (
    <DeleteModal deleteModalHandler={deleteOrder(id, actions)} modalstatus="Borrar Order">
      <DeleteOrderInfo id={id} status={status} />
    </DeleteModal>
  )
}

const OrderInfo = ({id, actions, state}) => {
  return (
    <InfoModal
      getModalHandler={fetchOrderInfoHandler(id, state, actions)}
      modalstatus="Ver Order"
    >
      <OrderInfoForm />
    </InfoModal>
  )
}

const OrderEdit = ({id, actions, state}) => {
  const {handleSubmit, EditableForm} = useEditableForm()
  return (
    <EditModal
      getModalHandler={fetchOrderInfoHandler(id, state, actions)}
      postModalHandler={handleSubmit(updateOrderHandler(id, actions))}
      modalstatus="Editar Order"
    >
      <EditableForm domain={DOMAINS.ORDERS} encType={'multipart/form-data'} />
    </EditModal>
  )
}

const OrderButtons = ({id, status, state, payment, table, actions}) => {
  return (
    <div className="flex justify-end">
      <OrderInfo
        id={id}
        table={table}
        status={status}
        payment={payment}
        state={state}
        actions={actions}
      />
      <OrderEdit
        id={id}
        status={status}
        payment={payment}
        table={table}
        state={state}
        actions={actions}
      />
      <OrderDelete
        id={id}
        status={status}
        table={table}
        state={state}
        payment={payment}
        actions={actions}
      />
    </div>
  )
}

const OrderItem = ({status, created_at, id, payment, table, key, state, actions}) => {
  return (
    <li
      className="border-double border-4 border-sky-200 panel-block is-flex item-container is-justify-content-space-between m-7"
      id={id}
      key={key}
    >
      <div className="Order-left is-flex is-justify-content-space-between m-2 my-5 ">
        <span className="Order-id ml-2"> {`Pedido número: ${id}`}</span>
        <span className="Order-created_at ml-2"> {`Fecha: ${created_at}`} </span>
        <span className="Order-status ml-2"> {`Estado: ${status}`}</span>
        <span className="Order-table ml-2"> {`Mesa: ${table}`}</span>
      </div>
      <OrderButtons
        id={id}
        created_at={created_at}
        state={state}
        status={status}
        payment={payment}
        table={table}
        actions={actions}
      />
    </li>
  )
}

export default OrderItem
