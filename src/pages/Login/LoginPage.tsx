import * as React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Icon, 
  Input, 
  Button, 
  message,
} from 'antd';
import { FormComponentProps } from '../../../node_modules/antd/lib/form';
import { History } from 'history';


import {
  LoginContainer,
  FormWrapper,
  FormTitle,
  FormFriendLink,
} from './style';
import LoginBgImg from '../../static/images/login_bg_2.jpg';
import { checkLogin } from './LoginPage.redux';



/**
 * 登录页
 */
interface ILoginProps extends FormComponentProps {
  checkLogin: (data: { adminname: string, adminpwd: string, remember: boolean }) => void;
  LoginPageReducer: { isAuth: boolean, message: string | '' };
  history: History;
}
interface ILoginState {
  readonly loading: boolean;     // 按钮loading状态
};


class Login extends React.PureComponent<ILoginProps, ILoginState> {

  public readonly state = {
    loading: false,
  };

  
  public handleSubmit: React.FormEventHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    this.setState({ loading: true });

    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.props.checkLogin(values);
        
        // 跳转到home
        message.loading('请等待...', 2, () => {
          window.location.href = '/home';
        });   
      }
      this.setState({ loading: false });
    });
  }


  public render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <LoginContainer bgImgUrl={LoginBgImg}>
        {/* 表单容器 */}
        <FormWrapper>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <FormTitle>后台管理系统</FormTitle>
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('adminname', {
                  rules: [{ required: true, message: 'Please input your adminname!' }],
                })(
                  <Input 
                    prefix={<Icon type="user" style={{ color: '#fff' }} />} placeholder="Adminname" 
                    size="large"  
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('adminpwd', {
                rules: [{ required: true }, { message: '请输入密码!' }]
              })(
                <Input 
                  prefix={<Icon type="lock" style={{ color: '#fff' }} />} type="password" placeholder="Adminpwd" 
                  size="large"
                />
                )
              }
            </Form.Item>
            <Form.Item style={{ textAlign: 'left', color: '#fff' }}>
              <Button 
                type="primary" 
                htmlType="submit" className="login-form-button"
                style={{ width: '100%' }}
                size="large"
                loading={this.state.loading}
              >login</Button>
              Or <a href="">register now!</a>
            </Form.Item>
            <Form.Item>
              <FormFriendLink>
                <span>
                  <Icon type="github" /><a href="https://github.com/ddzy" target="blank">         https://github.com/ddzy</a>
                </span>
              </FormFriendLink>
            </Form.Item>
          </Form>
        </FormWrapper>
      </LoginContainer>
    );
  }

}


const LoginPage = Form.create()(Login);

function mapStateToProps(state: any) {
  return {
    LoginPageReducer: state.LoginPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    checkLogin,
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(LoginPage) as React.ComponentClass<any>;