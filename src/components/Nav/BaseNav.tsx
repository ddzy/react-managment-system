import * as React from 'react';
import { Menu } from 'antd';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Miao from '../../static/images/miaomiao.jpg';
import {
  NavLogoDiv,
} from './style'
import MenuConfig from '../../config/navMenu-config';
import { changeMenuName } from './BaseNav.redux';



const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


interface IBaseNavProps extends RouteComponentProps<any> {
  changeMenuName: (data: any) => any;
};

interface IBaseNavState {
  menuList: any[];
};


/**
 * 公共导航菜单
 */
class BaseNav extends React.PureComponent<IBaseNavProps, IBaseNavState> {

  public readonly state = {
    menuList: [],
  };

  public componentWillMount(): void {
    this.setState({
      menuList: this.initNavMenu(MenuConfig),
    });
  }
  

  // 初始化导航菜单
  public initNavMenu = (data: any): JSX.Element[] => {
    return data.map((value: any) => {
      if (value.children) {
        return (
          <SubMenu title={value.title} key={value.key}>
            {this.initNavMenu(value.children)}
          </SubMenu>
        )
      }
      return (
        <MenuItem title={value.title} key={value.key}>
          <NavLink to={value.key}>{value.title}</NavLink>
          <span key={value.key}>{value.title}</span>
        </MenuItem>
      )
    })
  }

  // 存储 MenuName
  public handleMenuClick = (name: any): void => {
    this.props.changeMenuName(name.item.props.title);
  }


  public render(): JSX.Element {
    return (
      <div className="yang-nav-container">
        {/* Logo */}
        <NavLogoDiv 
          logoUrl={Miao}
        />
        <Menu
          theme="dark"
          mode="vertical-left"
          defaultSelectedKeys={[this.props.location.pathname]}
          onClick={this.handleMenuClick}
        >
          {this.state.menuList}
        </Menu>
      </div>
    );
  }
}


function mapStateToProps(state: { menuName: string }) {
  return {
    
  };
}
function mapDispatchToProps() {
  return {
    changeMenuName,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(withRouter(BaseNav)) as React.ComponentClass<any>;