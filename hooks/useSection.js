import {PAGE_SECTIONS} from '../constants/appConstants'
import {
  Orders,
  Tables,
  Products,
  Categories,
  Users,
  Payments,
  Kitchen,
  Wineries,
  Finances,
} from '../components/PageSections'

const useSection = (name) => {
  const SECTION_MAPPER = {
    [PAGE_SECTIONS.ORDERS]: Orders,
    [PAGE_SECTIONS.TABLES]: Tables,
    [PAGE_SECTIONS.PAYMENTS]: Payments,
    [PAGE_SECTIONS.PRODUCTS]: Products,
    [PAGE_SECTIONS.CATEGORIES]: Categories,
    [PAGE_SECTIONS.USERS]: Users,
    [PAGE_SECTIONS.KITCHEN]: Kitchen,
    [PAGE_SECTIONS.WINERIES]: Wineries,
    [PAGE_SECTIONS.FINANCES]: Finances,
  }

  return SECTION_MAPPER[name]
}

export default useSection
