import * as React from 'react';
import { Avatar, Popover, Button, Modal } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';


import { 
  AdminInfoContainer,
  AdminInfo,
  BreadcrumbContainer,
  BreadcrumbTitle,
  BreadcrumbContent,
  BreadcrumbWeatherList,
  BreadcrumbWeatherItem,
  BreadcrumbTitleText,
  AdminChangeTheme,
} from './style';
import { getCityAndWeather } from './BaseHeader.redux';
import { getAdminInfo } from '../../pages/Login/LoginPage.redux';


/**
 * 公共头部
 */
interface IBaseHeaderProps extends RouteComponentProps<any> {
  BaseNavReducer: { menuName: string | '' };
  BaseHeaderReducer: { date: string, city: string, weather: string };
  LoginPageReducer: { message: string, isAuth: boolean, adminname: string };
  getCityAndWeather: () => void;
  getAdminInfo: () => void;
}
interface IBaseHeaderState {
  readonly time: string;
};


class BaseHeader extends React.PureComponent<IBaseHeaderProps, IBaseHeaderState> {

  public timer = 0;

  public readonly state = {
    time: new Date().toLocaleTimeString(),
  };

  public componentDidMount(): void {
    // 获取城市、天气信息, 更新时间
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    });
    this.props.getCityAndWeather();
    this.props.getAdminInfo();
  }

  public componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  public handleLogout = (): void => {
    // 登出
    // localStorage.removeItem('admin');
    // this.props.history.push('/login');
    Modal.confirm({
      title: '要忍心离开吗?',
      onOk: () => {
        localStorage.removeItem('admin');
        window.location.href = '/login';
      },
    });
  }

  public render(): JSX.Element {
    return (
      <div className="yang-header">
        <AdminInfoContainer>
          <Popover
            title={`欢迎你:   ${this.props.LoginPageReducer.adminname}`}
            content={
              <div>
                <Button
                  htmlType="button"
                  type="dashed"
                  style={{ width: '100%' }}
                >个人中心</Button>
                <Button
                  htmlType="button"
                  type="dashed"
                  style={{ width: '100%', marginTop: '5px' }}
                  onClick={this.handleLogout}
                >退出登录</Button>
              </div>
            }
          >
            <AdminInfo>
              <Avatar 
                icon="user"
                // size={45}
                size="large"
                style={{backgroundColor: '#09c'}}
              />
            </AdminInfo>
          </Popover>
          <AdminChangeTheme>
            <Button
              type="default"
              size="small"
              htmlType="button"
            >更换主题</Button>
          </AdminChangeTheme>
        </AdminInfoContainer>
        <BreadcrumbContainer>
          <BreadcrumbTitle>
            <BreadcrumbTitleText>
              {
                this.props.BaseNavReducer.menuName || this.props.location.pathname
              }
            </BreadcrumbTitleText>
          </BreadcrumbTitle>
          <BreadcrumbContent>
            <BreadcrumbWeatherList>
              <BreadcrumbWeatherItem>
                {this.props.BaseHeaderReducer.date}
              </BreadcrumbWeatherItem>
              <BreadcrumbWeatherItem>
                {this.state.time}
              </BreadcrumbWeatherItem>
              <BreadcrumbWeatherItem>
                {this.props.BaseHeaderReducer.city}
              </BreadcrumbWeatherItem>
              <BreadcrumbWeatherItem>
                {this.props.BaseHeaderReducer.weather}
              </BreadcrumbWeatherItem>
            </BreadcrumbWeatherList>
          </BreadcrumbContent>
        </BreadcrumbContainer>
      </div>
    );
  } 
}


function mapStateToProps(state: any): any {
  return {
    BaseNavReducer: state.BaseNavReducer,
    BaseHeaderReducer: state.BaseHeaderReducer,
    LoginPageReducer: state.LoginPageReducer,
  };
}

function mapDispatchToProps() {
  return {
    getCityAndWeather,
    getAdminInfo
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps(),
)(BaseHeader)) as React.ComponentClass<any>;