import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';

import { LoginFormWrapper, FormBox } from './style';
import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item;



export interface IFormLoginPageProps extends FormComponentProps { };
export interface IFormLoginPageState { };



class FormLogin extends React.PureComponent<IFormLoginPageProps, IFormLoginPageState> {

  public readonly state = {};

  public handleSubmit: React.FormEventHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  public render(): JSX.Element {
    const { getFieldDecorator } = this.props.form;

    return (
      <LoginFormWrapper>
        {/* 表单 */}
        <FormBox>
          <Card>
            <Form
            className="login-form"
            onSubmit={this.handleSubmit}
          >
            <FormItem>
              {
                getFieldDecorator('adminname', {
                  rules: [{ required: true, message: 'Please input your adminname!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="adminname"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('adminpwd', {
                  rules: [{ required: true, message: 'Please input your pwd!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a href="" style={{ float: 'right' }}>Forgot</a>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="login-form-button"
                style={{ width: '100%' }}
              >Send</Button>
            </FormItem>
            <FormItem>
              Or <a href="">Register Now!</a>
            </FormItem>
          </Form>
          </Card>
        </FormBox>
      </LoginFormWrapper>
    );
  }
}

const FormLoginPage = Form.create()(FormLogin);

export default FormLoginPage as React.ComponentClass<any>;