import {useState} from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import {getCookie} from 'cookies-next'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS, HTTP_STATUSES, FORMS_INPUTS} from '../../constants/appConstants'
import useCreateForm from '../../utils/useCreateForm'
import {getCreateOrderProps} from './helpers/getCreateOrderProps'

const CreateOrder = ({state, actions}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [createOrderProps, setCreateOrderProps] = useState({})
  const {getValues, CreateForm} = useCreateForm()
  const buttonClickHandler = async () => {
    const res = await getCreateOrderProps(state, actions)
    setCreateOrderProps(res)
    setModalToggle(!modalToggle)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
  }
  const onSubmit = async () => {
    const createProductApi = buildUrl(getApiUrl(DOMAINS.ORDERS).createOrder)
    const token = getCookie('JWT_TOKEN')
    const data = getValues()
    const body = {
      status: data.status.id,
      products: data.product.map((product) => product.id),
      table: data.table.id,
    }
    const res = await axios.post(createProductApi, JSON.stringify(body), {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (res.status === HTTP_STATUSES.CREATED) {
      actions.setReloadComponent(true)
      handleCloseModal()
    }
  }

  return (
    <div
      id="create-Order"
      className="border-sky-200 panel-heading is-flex is-align-items-flex-center is-justify-content-flex-center"
    >
      <button
           className="button is-responsive mx-72 is-success w-64 bg-white shadow rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={buttonClickHandler}
      >
        Crear Orden
      </button>
      {modalToggle && (
        <Modal
        
          title={'Crear Orden'}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          onClick={onSubmit}
        >
          <CreateForm createFormProps={createOrderProps} />
        </Modal>
      )}
    </div>
  )
}

export default CreateOrder
