const EMPTY_ARRAY = []
const EMPTY_OBJECT = {}
const EMPTY_STRING = ''
const PAGE_SECTIONS = {
  TABLES: 'TABLES',
  CATEGORIES: 'CATEGORIES',
  PRODUCTS: 'PRODUCTS',
  USERS: 'USERS',
  ORDERS: 'ORDERS',
  PAYMENTS: 'PAYMENTS',
  WINERIES: 'WINERIES',
  FINANCES: 'FINANCES',
  KITCHEN: 'KICHEN',
}

const NAVBAR_ACTIONS = {
  DISPLAY_COMPONENT: (actions, domain) => actions.setMainPage(domain),
  LOGOUT: (actions) => actions.logout(),
}
const SIDEBAR_SECTIONS = [
  {text: 'Mesas', page: PAGE_SECTIONS.TABLES},
  {text: 'Categorias', page: PAGE_SECTIONS.CATEGORIES},
  {text: 'Productos', page: PAGE_SECTIONS.PRODUCTS},
  {text: 'Usuarios', page: PAGE_SECTIONS.USERS},
  {text: 'Pedidos', page: PAGE_SECTIONS.ORDERS},
  {text: 'Historial de pagos', page: PAGE_SECTIONS.PAYMENTS},
]

const DOMAINS = {
  TABLES: 'TABLES',
  ORDERS: 'ORDERS',
  PRODUCTS: 'PRODUCTS',
  ORDERS: 'ORDERS',
  PAYMENTS: 'PAYMENTS',
  CATEGORIES: 'CATEGORIES',
  USERS: 'USERS',
  AUTH: 'AUTH',
  WINERIES: 'WINERIES',
  FINANCES: 'FINANCES',
  KITCHEN: 'KITCHEN',
}

const HTTP_STATUSES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
}

const AUTH_TOKEN = 'token'
const noop = () => {}

const MODAL_TYPES = {
  TRANSACTION: 'TRANSACTION',
  INFO: 'INFO',
  DELETE: 'DELETE',
}

const NAVBAR_SECTIONS = [
  {
    text: 'Mesas',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.TABLES,
  },
  {
    text: 'Categorias',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.CATEGORIES,
  },
  {
    text: 'Productos',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.PRODUCTS,
  },
  {
    text: 'Usuarios',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.USERS,
  },
  {
    text: 'Pedidos',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.ORDERS,
  },
  {
    text: 'Historial de pagos',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.PAYMENTS,
  },
]

const NAVBAR_RIGHT_SECTIONS = [
  {
    text: 'Bodegas',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.WINERIES,
  },
  {
    text: 'Cocina',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.KITCHEN,
  },
  {
    text: 'Finanzas',
    onClick: NAVBAR_ACTIONS.DISPLAY_COMPONENT,
    domain: PAGE_SECTIONS.FINANCES,
  },
  {text: 'Cerrar sesión', onClick: NAVBAR_ACTIONS.LOGOUT},
]

const FORMS_INPUTS = {
  [DOMAINS.CATEGORIES]: {
    enctype: 'multipart/form-data',
    props: {
      title: {
        type: 'text',
        initialValue: '',
      },
      image: {
        type: 'file',
        initialValue: null,
        accept: 'image/png, image/gif, image/jpeg',
      },
    },
  },
  [DOMAINS.TABLES]: {
    props: {
      number: {
        type: 'text',
        initialValue: '',
      },
    },
  },
  [DOMAINS.PRODUCTS]: {
    enctype: 'multipart/form-data',
    props: {
      image: {
        type: 'file',
        text: 'Imagen',
        initialValue: null,
      },
      price: {
        type: 'text',
        text: 'Precio',
        initialValue: null,
      },
      title: {
        type: 'text',
        text: 'Titulo',
        initialValue: null,
      },
      category: {
        text: 'Categoria',
        type: 'list',
      },
      active: {
        text: 'Activo',
        type: 'checkbox',
      },
    },
  },
  [DOMAINS.ORDERS]: {
    enctype: 'multipart/form-data',
    props: {
      table: {
        text: 'Mesa',
        type: 'list',
      },
      product: {
        text: 'Producto',
        type: 'list',
        isMulti: true,
      },
      status: {
        text: 'Estado',
        type: 'list',
      },
    },
  },
  [DOMAINS.USERS]: {
    props: {
      username: {
        type: 'text',
        initialValue: null,
      },
      category: {
        type: 'text',
        initialValue: null,
      },
      email: {
        type: 'text',
        initialValue: null,
      },
      first_name: {
        type: 'text',
        initialValue: null,
      },
      last_name: {
        type: 'text',
        initialValue: null,
      },
      password: {
        type: 'password',
        initialValue: null,
      },
      is_active: {
        type: 'checkbox',
        initialValue: null,
      },
      is_staff: {
        type: 'checkbox',
        initialValue: null,
      },
    },
  },
}

export {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  PAGE_SECTIONS,
  SIDEBAR_SECTIONS,
  DOMAINS,
  AUTH_TOKEN,
  HTTP_STATUSES,
  MODAL_TYPES,
  FORMS_INPUTS,
  NAVBAR_SECTIONS,
  NAVBAR_RIGHT_SECTIONS,
  noop,
}
