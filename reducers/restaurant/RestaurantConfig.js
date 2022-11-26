import {
  NAVBAR_SECTIONS,
  PAGE_SECTIONS,
  SIDEBAR_SECTIONS,
} from '../../constants/appConstants'

const restaurantInitialState = {
  mainPage: PAGE_SECTIONS.PRODUCTS,
  tables: [],
  categories: [],
  products: [],
  payments: [],
  statuses: [],
  sidebarSections: SIDEBAR_SECTIONS,
  navbarSections: NAVBAR_SECTIONS,
  reloadComponent: false,
}

export {restaurantInitialState}
