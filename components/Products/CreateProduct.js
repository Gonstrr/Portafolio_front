import {useState} from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import {getCookie} from 'cookies-next'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS, HTTP_STATUSES, FORMS_INPUTS} from '../../constants/appConstants'
import useCreateForm from '../../utils/useCreateForm'
import {getCreateProductProps} from './helpers/getCreateProductProps'

const CreateProduct = ({state, actions}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [createProductProps, setCreateProductProps] = useState({})
  const {getValues, CreateForm} = useCreateForm()
  const buttonClickHandler = async () => {
    const res = await getCreateProductProps(state, actions)
    setCreateProductProps(res)
    setModalToggle(!modalToggle)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
  }
  const onSubmit = async () => {
    const createProductApi = buildUrl(getApiUrl(DOMAINS.PRODUCTS).createProduct)
    const token = getCookie('JWT_TOKEN')
    const requestBody = getValues()
    const formData = new FormData()
    
    formData.append('image', requestBody.image.item(0))
    formData.append('title', requestBody.title)
    formData.append('price', requestBody.price)
    formData.append('active', requestBody.active)
    formData.append('category', requestBody.category)
    const res = await axios.post(createProductApi, formData, {
      headers: {
        'content-type': 'multipart/form-data',
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
      id="create-Product"
      className="border-sky-200 panel-heading is-flex is-align-items-flex-end is-justify-content-flex-start "
    >
      <button
          className="button is-responsive mx-72 is-success w-64 bg-white shadow rounded bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full"
        onClick={buttonClickHandler}
      >
        Crear Producto de Bodega
      </button>
      {modalToggle && (
        <Modal
          title={'Crear Producto'}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          onClick={onSubmit}
        >
          <CreateForm createFormProps={createProductProps} />
        </Modal>
      )}
    </div>
  )
}

export default CreateProduct
