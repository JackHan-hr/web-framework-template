import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';
import pathToRegexp from 'path-to-regexp';
import SiderMenuLess from './SiderMenu.less';
import { urlToList } from 'utils';

const { Sider } = Layout
const { SubMenu } = Menu

class SiderMenu extends React.Component {

  constructor(props) {
    super(props);
    this.flatMenuKeys = this.getFlatMenuKeys(props.menuDatas);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    };
  }

  // 获取菜单的所有path
  getFlatMenuKeys(menu) {
    return (menu.reduce((keys, item) => {
      keys.push(item.path);
      if (item.children) {
        return keys.concat(this.getFlatMenuKeys(item.children));
      }
      return keys;
    }, []));
  }

  // 跟据菜单的所以path匹配当前path
  getDefaultCollapsedSubMenus(props) {
    const {
      location: { pathname },
    } = props || this.props;
    return this.getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  }

  // 匹配当前path
  getMenuMatchKeys(flatMenuKeys, paths) {
    return (paths.reduce(
      (matchKeys, path) =>
        matchKeys.concat(flatMenuKeys.filter(item => pathToRegexp(item).test(path))),
      []
    ));
  }

  // 获取当前选中的path的key
  getSelectedMenuKeys() {
    const {
      location: { pathname },
    } = this.props;
    return this.getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  }

  // 渲染子菜单
  getMenuItemPath(item) {
    const itemPath = item.path;
    let { name, icon } = item;
    const { location, isMobile, onCollapse } = this.props;
    return (
      <Link
        to={itemPath}
        replace={itemPath === location.pathname}
        onClick={
          isMobile
            ? () => {
                onCollapse(true);
              }
            : undefined
        }
      >
        {icon && <img className={`${SiderMenuLess.icon} sider-menu-item-img`} src={require(`assets/img/menu/${icon}.png`)} alt="icon" />}
        <span>{name}</span>
      </Link>
    );
  }

  // 递归计算出所有父级菜单和所有子菜单
  getSubMenuOrItem(item) {
    let { icon } = item;
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              icon ? (
                <span>
                  <img className={`${SiderMenuLess.icon} sider-menu-item-img`} src={require(`assets/img/menu/${icon}.png`)} alt="icon" />
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
    }
  }

  // 由一级菜单开始进行所有菜单页的递归函数
  getNavMenuItems(menuDatas) {
    const menus = menuDatas.filter((item) => item.name && item.enabled)
             .map((item) => {
               const subItem = this.getSubMenuOrItem(item);
               return subItem;
             })
             .filter((item) => item);
    return menus;
  }

  // 更新打开并选中的菜单
  isMainMenu(key) {
    const { menuDatas } = this.props;
    return menuDatas.some(item => key && (item.key === key || item.path === key));
  }

  // 菜单栏change事件
  handleOpenChange(openKeys) {
    let self = this;
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne = openKeys.filter(openKey => self.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    });
  }

  render() {
    const { logo, menuDatas, collapsed, onCollapse } = this.props;

    const { openKeys } = this.state;
    const menuProps = collapsed
      ? {}
      : {
          openKeys,
        };

    let selectedKeys = this.getSelectedMenuKeys();
    if (!selectedKeys.length) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={256}
        className={SiderMenuLess.sider}
      >
        <div className={SiderMenuLess.logo} key="logo">
          <Link to="/home">
            <img src={require('assets/img/avatar.png')} alt="logo" />
            <h1>应用 模板</h1>
          </Link>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={this.handleOpenChange.bind(this)}
          selectedKeys={selectedKeys}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {this.getNavMenuItems(menuDatas)}
        </Menu>
      </Sider>
    )
  }

}

export default SiderMenu;
