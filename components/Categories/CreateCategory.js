import {useState} from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import {getCookie} from 'cookies-next'
import buildUrl from '../../utils/buildService'
import getApiUrl from '../../utils/getApiUrl'
import {DOMAINS, HTTP_STATUSES, FORMS_INPUTS} from '../../constants/appConstants'
import useCreateForm from '../../utils/useCreateForm'

const CreateCategory = ({state, actions}) => {
  const [modalToggle, setModalToggle] = useState(false)
  const {getValues, CreateForm} = useCreateForm()
  const buttonClickHandler = () => {
    setModalToggle(!modalToggle)
  }
  const handleCloseModal = () => {
    setModalToggle(false)
  }
  const onSubmit = async () => {
    const createCategoryApi = buildUrl(getApiUrl(DOMAINS.CATEGORIES).createCategory)
    const token = getCookie('JWT_TOKEN')
    const requestBody = getValues()
    const formData = new FormData()
    formData.append('image', requestBody.image.item(0))
    formData.append('title', requestBody.title)
    const res = await axios.post(createCategoryApi, formData, {
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
      id="create-Category"
      className="border-sky-100 panel-heading is-flex is-align-items-flex-center "
    >
      <button
        className="button is-responsive mx-72 is-success w-64 bg-white shadow rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={buttonClickHandler}
      >
        Crear Categoría
      </button>
      {modalToggle && (
        <Modal

          title={'Crear una Categoría'}
          toggle={modalToggle}
          isButtonValid={true}
          toggleOnClick={handleCloseModal}
          onClick={onSubmit}
        >
          <CreateForm createFormProps={FORMS_INPUTS[DOMAINS.CATEGORIES]} />
        </Modal>
      )}
    </div>
  )
}

export default CreateCategory
