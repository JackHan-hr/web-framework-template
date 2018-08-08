const commonMenuData = [
  {
    name: '客户管理',
    id: 'customer',
    icon: 'avatar',
    path: 'customer',
    enabled: true,
    children: [
      {
        name: '开发客户',
        id: 'devcustomer',
        icon: 'avatar',
        path: 'development',
        enabled: true,
      },
      {
        name: '签约客户',
        id: 'signcustomer',
        icon: 'avatar',
        path: 'signcontract',
        enabled: true,
      },
    ],
  },
  {
    name: '线索引擎',
    id: 'clue',
    icon: 'avatar',
    path: 'clue',
    enabled: true,
    children: [
      {
        name: '线索库',
        id: 'cluelibrary',
        icon: 'avatar',
        path: 'library',
        enabled: true,
      },
      {
        name: '市场活动',
        id: 'marketactivity',
        icon: 'avatar',
        path: 'marketactivity',
        enabled: true,
      },
      {
        name: '官网推荐',
        id: 'weboffical',
        icon: 'avatar',
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

export { commonMenuData };
