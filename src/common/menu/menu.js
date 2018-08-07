import { isUrl } from 'utils';
import { normalMenuData } from './normal';

const menuIconPath = 'assets/img/menu/';

function formatter(authority, menuData, parentPath = '/') {
  const data = menuData || normalMenuData;

  // 注入模块权限判断

  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    item.icon = menuIconPath + item.icon;
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
