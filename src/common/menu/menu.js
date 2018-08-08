import { isUrl } from 'utils';
import { commonMenuData } from './common';

function formatter(authority, menuData, parentPath = '/home/') {
  const data = menuData || commonMenuData;

  // 注入模块权限判断

  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
    };
    if (item.children) {
      result.children = formatter(authority, item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });
}

export const getMenuData = (authority) => formatter(authority);
