import {useState} from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import {getCookie} from 'cookies-next'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS, HTTP_STATUSES} from '../../constants/appConstants'

const CreateTableForm = ({onChange}) => {
  const onInputChange = (e) => {
    onChange({[e.target.name]: e.target.value})
  }
  return (
    <form className="createTableForm">
      <label htmlFor="table-number">Número de Mesa</label>
      <div className="mb-6">
        <input
          type="text"
          name="number"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="table-number"
          placeholder="1"
          onChange={onInputChange}
        />
      </div>
    </form>
  )
}

const CreateTable = ({state, actions}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [modalState, setModalState] = useState({})
  const buttonClickHandler = () => {
    setModalToggle(!modalToggle)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
  }
  const onSubmit = async () => {
    const createTableApi = buildUrl(getApiUrl(DOMAINS.TABLES).createTable)
    const token = getCookie('JWT_TOKEN')
    const res = await axios.post(createTableApi, modalState, {
      headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
    })
    if (res.status === HTTP_STATUSES.CREATED) {
      actions.setReloadComponent(true)
      handleCloseModal()
    }
  }
  return (
    <div
      id="create-Table"
      className="border-double border-4 border-sky-200 panel-heading is-flex is-align-items-flex-end is-justify-content-flex-center"
    >
      <button
          className="button is-responsive mx-72 is-success w-64 bg-white shadow rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={buttonClickHandler}
      >
        Crear Mesa
      </button>
      {modalToggle && (
        <Modal
          title={'Crear Mesa'}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          onClick={onSubmit}
        >
          <CreateTableForm onChange={setModalState} />
        </Modal>
      )}
    </div>
  )
}

export default CreateTable
