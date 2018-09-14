import * as React from 'react';
import {
  Drawer,
  Form,
  Input,
  Radio,
  Select,
  Row,
  Col,
  Button,
  DatePicker,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';


import {
  EmployeeControlWrapper,
} from '../style';


export interface IEmployeeControlModalProps extends FormComponentProps {
  drawerVisible: boolean;
  drawerTitle: string;

  onToggleCreateDrawer: (
    e: React.MouseEvent,
  ) => void;

  onSubmit: (
    values: any,
  ) => void;
};



//// 编辑|添加员工 模态框
const EmployeeControlModal: React.SFC<
  IEmployeeControlModalProps
  > = (props: IEmployeeControlModalProps): JSX.Element => {

    const { getFieldDecorator } = props.form;


    const handleSubmit: React.FormEventHandler = (
      e: React.FormEvent,
    ): void => {
      e.preventDefault();

      props.form.validateFields((err, fieldValues) => {
        if (!err) {
          // 格式化日期
          const joinTime = fieldValues['employee_join_time'];
          const values: object = {
            ...fieldValues,
            employee_join_time: joinTime
              .format('YYYY-MM-DD HH:mm:ss'),
          };

          props.onSubmit(values);
        }
      });
    }


    return (
      <EmployeeControlWrapper>
        <Drawer
          placement="right"
          style={{
            textAlign: 'left',
          }}
          title={props.drawerTitle}
          width={700}
          visible={props.drawerVisible}
          onClose={props.onToggleCreateDrawer}
        >
          <Form
            layout="inline"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  label="员工姓名"
                >
                  {getFieldDecorator('employee_name', {
                    rules: [{
                      required: true,
                      message: '员工姓名不能为空!'
                    }]
                  })(
                    <Input
                      type="text"
                      placeholder="员工姓名..."
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="性别"
                >
                  {getFieldDecorator('employee_gender', {
                    rules: [{
                      required: true,
                      message: '请至少选择一个!'
                    }]
                  })(
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="男">
                        男
                  </Radio.Button>
                      <Radio.Button value="女">
                        女
                  </Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Form.Item
                  label="状态"
                >
                  {getFieldDecorator('employee_state', {
                    rules: [{
                      required: true,
                      message: '至少选择一个状态!',
                    }],
                    initialValue: "老油条",
                  })(
                    <Select>
                      <Select.Option value="老油条">
                        老油条
                      </Select.Option>
                      <Select.Option value="新手">
                        新手
                      </Select.Option>
                      <Select.Option value="进阶">
                        进阶
                      </Select.Option>
                      <Select.Option value="熟悉">
                        熟悉
                      </Select.Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="婚姻状态"
                >
                  {getFieldDecorator('employee_marry', {
                    rules: [{
                      required: true,
                      message: '至少选择一个!',
                    }]
                  })(
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button
                        value="已婚"
                      >已婚</Radio.Button>
                      <Radio.Button
                        value="未婚"
                      >未婚</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Form.Item label="地址">
                  {getFieldDecorator('employee_address', {
                    rules: [{
                      required: true,
                      message: '地址为必填项!',
                    }]
                  })(
                    <Input
                      type="text"
                      placeholder="请输入员工地址..."
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="入职时间">
                  {getFieldDecorator('employee_join_time', {
                    rules: [{
                      required: true,
                      message: '入职时间必填项!',
                    }]
                  })(
                    <DatePicker />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Form.Item label="所属城市">
                  {getFieldDecorator('employee_belong_city', {
                    rules: [{
                      required: true,
                      message: '此为必填项!',
                    }]
                  })(
                    <Input
                      type="text"
                      placeholder="请输入所属城市..."
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              htmlType="submit"
              style={{
                marginRight: 8,
              }}
              onClick={props.onToggleCreateDrawer}
            >离开</Button>
            <Button
              type="primary"
              htmlType="button"
              onClick={handleSubmit}
            >提交</Button>
          </div>
        </Drawer>
      </EmployeeControlWrapper>
    );

  };


export default Form.create()(EmployeeControlModal);