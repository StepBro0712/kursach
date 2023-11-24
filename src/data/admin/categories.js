const categories = [
  {
    value: 'computers',
    name: 'Компьютеры',
    api: '/computers',
    key: 'computer_id',
    fields: [
      {keyIn: 'graphic_card', name: 'graphic_card', type: 'text', value: ''},
      {keyIn: 'processor', name: 'processor', type: 'text', value: ''},
      {keyIn: 'ram', name: 'ram', type: 'text', value: ''},
    ],
  },
  {
    value: 'basket',
    name: 'Корзина',
    api: '/basket',
    key: 'basket_id',
    fields: [
      {
        keyIn: 'basket_time',
        name: 'basket_time',
        type: 'datetime-local',
        value: '',
      },
      {
        keyIn: 'peoples',
        name: 'peoples',
        type: 'number',
        value: '',
      },
    ],
    sideFieldsLocal: [
      {
        keyIn: 'login',
        api: '/users',
        name: 'login',
        subName: 'user',
        type: 'text',
        value: '',
      },
      {
        keyIn: 'room_id',
        api: '/rooms',
        name: 'type_room',
        subName: 'room',
        type: 'number',
        value: '',
      },
      {
        keyIn: 'game_id',
        api: '/games',
        name: 'game',
        subName: 'game',
        type: 'number',
        value: '',
      },
    ],
  },

  {
    value: 'employees',
    name: 'Сотрудники',
    api: '/employees',
    key: 'employee_id',
    fields: [
      {keyIn: 'name', name: 'name', type: 'text', value: ''},
      {keyIn: 'surname', name: 'surname', type: 'text', value: ''},
      {keyIn: 'mid_name', name: 'mid_name', type: 'text', value: ''},
      {keyIn: 'salary', name: 'salary', type: 'number', value: ''},
      {keyIn: 'title', name: 'title', type: 'text', value: ''},
      {keyIn: 'phone_number', name: 'phone_number', type: 'text', value: ''},
    ],
    sideFieldsLocal: [
      {
        keyIn: 'status_id',
        api: '/statuses',
        name: 'status_id',
        subName: 'status',
        type: 'text',
        value: '',
      },
    ],
  },
  {
    value: 'statuses',
    name: 'Статусы',
    api: '/statuses',
    key: 'status_id',
    fields: [{keyIn: 'status', name: 'status', type: 'text', value: ''}],
  },
  {
    value: 'users',
    name: 'Пользователи',
    api: '/users',
    key: 'user_id',
    fields: [
      {keyIn: 'name', name: 'name', type: 'text', value: ''},
      {keyIn: 'surname', name: 'surname', type: 'text', value: ''},
      {keyIn: 'login', name: 'login', type: 'text', value: ''},
      {keyIn: 'password', name: 'password', type: 'password', value: ''},
      {keyIn: 'email', name: 'email', type: 'email', value: ''},
    ],
    sideFieldsLocal: [
      {
        keyIn: 'role_id',
        api: '/roles',
        name: 'role',
        subName: 'role',
        type: 'text',
        value: '',
      },
    ],
  },
  {
    value: 'requests',
    name: 'Запросы на звонок',
    api: '/requests',
    key: 'request_id',
  },
]

export default categories
