import React from 'react'
import InfoModal from '../Modal/InfoModal'
import DeleteModal from '../Modal/DeleteModal'
import {
  deleteTable,
  fetchTableInfoHandler,
  updateTableHandler,
} from './helpers/tableHandlers'
import {DeleteTableInfo, TableInfoForm, useTableForm} from './helpers/tableComponents'
import EditModal from '../Modal/EditModal'
import useEditableForm from '../../utils/useEditableForm'
import {DOMAINS} from '../../constants/appConstants'

const TableDelete = ({id, number, actions}) => {
  return (
    <DeleteModal deleteModalHandler={deleteTable(id, actions)} modalTitle="Borrar Mesa">
      <DeleteTableInfo id={id} number={number} />
    </DeleteModal>
  )
}

const TableInfo = ({id}) => {
  return (
    <InfoModal getModalHandler={fetchTableInfoHandler(id)} modalTitle="Ver Mesa">
      <TableInfoForm />
    </InfoModal>
  )
}

const TableEdit = ({id, actions}) => {
  const {handleSubmit, EditableForm} = useEditableForm()
  return (
    <EditModal
      getModalHandler={fetchTableInfoHandler(id)}
      postModalHandler={handleSubmit(updateTableHandler(id, actions))}
      modalTitle="Editar Mesa"
    >
      <EditableForm domain={DOMAINS.TABLES} />
    </EditModal>
  )
}

const TableButtons = ({id, number, actions}) => {
  return (
    <div className="flex justify-end">
      <TableInfo id={id} />
      <TableEdit id={id} actions={actions} />
      <TableDelete id={id} number={number} actions={actions} />
    </div>
  )
}

const TableItem = ({number, id, actions, key}) => {
  return (
    <li
      className="border-double border-4 border-sky-200 is-centered panel-block is-flex item-container is-justify-content-space-between " 
      id={id}
      key={key}
    >
      <div className="table-left  is-flex is-justify-content-space-between mt-9 ">
        <span className="table-number ml-5 my-5">{`Mesa Numero: ${number}`}</span>
      </div>
      <TableButtons id={id} number={number} actions={actions} />
    </li>
  )
}

export default TableItem
