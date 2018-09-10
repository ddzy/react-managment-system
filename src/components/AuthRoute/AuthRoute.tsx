import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAdminInfo } from '../../pages/Login/LoginPage.redux';



export interface IAuthRouteProps extends RouteComponentProps<any> {
  getAdminInfo: () => void;
  LoginPageReducer: { adminname: string };
};
interface IAuthRouteState {};



/**
 * 权限路由
 */
class AuthRoute extends React.PureComponent<IAuthRouteProps, IAuthRouteState> {
  public readonly state = {};

  public componentDidMount(): void {
    this.props.getAdminInfo();
  }

  public render() {
    return null;
  }
}



function mapStateToProps(state: any) {
  return {
    LoginPageReducer: state.LoginPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    getAdminInfo,
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps(),
)(AuthRoute)) as React.ComponentClass<any>;