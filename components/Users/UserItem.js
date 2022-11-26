import React from 'react'
import InfoModal from '../Modal/InfoModal'
import DeleteModal from '../Modal/DeleteModal'
import {deleteUser, fetchUserInfoHandler, updateUserHandler} from './helpers/userHandlers'
import {DeleteUserInfo, UserInfoForm, useUserForm} from './helpers/userComponents'
import EditModal from '../Modal/EditModal'
import useEditableForm from '../../utils/useEditableForm'
import {DOMAINS} from '../../constants/appConstants'

const UserDelete = ({id, username, actions}) => {
  return (
    <DeleteModal deleteModalHandler={deleteUser(id, actions)} modalTitle="Borrar Usuario">
      <DeleteUserInfo id={id} username={username} />
    </DeleteModal>
  )
}

const UserInfo = ({id}) => {
  return (
    <InfoModal getModalHandler={fetchUserInfoHandler(id)} modalTitle="Ver Usuario">
      <UserInfoForm />
    </InfoModal>
  )
}

const UserEdit = ({id, actions}) => {
  const {handleSubmit, EditableForm} = useEditableForm()
  return (
    <EditModal
      getModalHandler={fetchUserInfoHandler(id)}
      postModalHandler={handleSubmit(updateUserHandler(id, actions))}
      modalTitle="Editar Usuario"
    >
      <EditableForm domain={DOMAINS.USERS} />
    </EditModal>
  )
}

const UserButtons = ({id, username, actions}) => {
  return (
    <div className="flex justify-end">
      <UserInfo id={id} />
      <UserEdit id={id} actions={actions} />
      <UserDelete id={id} username={username} actions={actions} />
    </div>
  )
}

const UserItem = ({username, id, actions, key}) => {
  return (
    <li
      className="border-double border-4 border-sky-200 panel-block is-flex item-container is-justify-content-space-between mt-5"
      id={id}
      key={key}
    >
      <div className="user-left  is-flex is-justify-content-space-between ">
        <span className="user-name m-auto ">{`Usuario : ${username}`}</span>
      </div>
      <UserButtons id={id} username={username} actions={actions} />
    </li>
  )
}

export default UserItem
