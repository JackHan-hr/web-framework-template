const normalMenuData = [
  {
    name: '客户管理',
    id: 'customer',
    icon: 'customer',
    path: 'customer',
    enabled: true,
    children: [
      {
        name: '开发客户',
        id: 'devcustomer',
        icon: 'dev-customer',
        path: 'development',
        enabled: true,
      },
      {
        name: '签约客户',
        id: 'signcustomer',
        icon: 'sign-customer',
        path: 'signcontract',
        enabled: true,
      },
    ],
  },
  {
    name: '线索引擎',
    id: 'clue',
    icon: 'clue',
    path: 'clue',
    enabled: true,
    children: [
      {
        name: '线索库',
        id: 'cluelibrary',
        icon: 'clue-library',
        path: 'library',
        enabled: true,
      },
      {
        name: '市场活动',
        id: 'marketactivity',
        icon: 'marketactivity',
        path: 'marketactivity',
        enabled: true,
      },
      {
        name: '官网推荐',
        id: 'weboffical',
        icon: 'webofficalrecommend',
        path: 'weboffical',
        enabled: true,
      },
    ],
  },
  {
    name: '异常页',
    icon: 'exception',
    path: 'exception',
    children: [
      {
        name: '404',
        icon: '404',
        path: '404',
      },
      {
        name: '401',
        icon: '401',
        path: '401',
      },
    ],
  },
];

export { normalMenuData };
