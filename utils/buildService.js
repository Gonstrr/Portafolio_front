import {parseTemplate} from 'url-template'

const buildUrl = (url, params) => {
  const baseUrl = 'http://127.0.0.1:8000/api'
  const urlTemplate = parseTemplate(url)
  return `${baseUrl}${urlTemplate.expand(params)}`
}

export default buildUrl
