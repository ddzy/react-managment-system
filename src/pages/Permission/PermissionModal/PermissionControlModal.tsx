import * as React from 'react';
import {
  Modal,
  Form,
  Input,
  Radio,
  Select,
  Row,
  Col,
  DatePicker,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as moment from 'moment';

import {
  PermissionControlWrapper,
} from '../style';


export interface IPermissionAuthorizedModalProps extends FormComponentProps {
  isEdit: boolean;
  title: string;
  visible: boolean;

  // 编辑 - 初始值
  managerId?: string;
  managerName?: string;
  managerPosition?: string;
  managerUpdateTime?: string;
  managerState?: string;
  managerCurrentAuthorized?: string;
  managerAuthorizedTime?: string;
  managerAuthorizedPerson?: string;

  onToggle: (type: 'CREATE') => void;
  onControlModalSubmit: (
    managerInfo: any,
  ) => void;
};


////
//// 编辑&&创建管理者 Modal
////
const PermissionControlModal = (
  props: IPermissionAuthorizedModalProps,
): JSX.Element => {

  const { getFieldDecorator } = props.form;

  /**
   * 处理提交
   */
  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent,
  ): void => {
    e.preventDefault();

    props.form.validateFields((err, fieldValues) => {
      if (!err) {
        // 格式化日期
        const values: object = {
          ...fieldValues,
          managerAuthorizedTime: fieldValues
            .managerAuthorizedTime
            .format('YYYY-MM-DD'),
          managerUpdateTime: fieldValues
            .managerUpdateTime
            .format('YYYY-MM-DD'),
        };

        // 提交父组件
        props.onControlModalSubmit(values);
        props.onToggle('CREATE');
      }
    });
  }



  return (
    <PermissionControlWrapper>
      <Modal
        destroyOnClose={true}
        title={props.title}
        visible={props.visible}
        onCancel={() => props.onToggle('CREATE')}
        onOk={handleSubmit}
      >
        <Form
          layout="horizontal"
          onSubmit={handleSubmit}
        >
          <Row gutter={16}> 
            <Col span={12}>
              <Form.Item
                label="姓名"
              >
                {getFieldDecorator('managerName', {
                  rules: [{
                    required: true,
                    message: '管理者姓名不能为空!'
                  }],
                  initialValue: props.isEdit
                    ? props.managerName
                    : ''
                })(
                  <Input
                    type="text"
                    placeholder="管理者姓名..."
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="管理职称"
              >
                {getFieldDecorator('managerPosition', {
                  rules: [{
                    required: true,
                    message: '请至少选择一个!'
                  }],
                  initialValue: props.isEdit
                    ? props.managerPosition
                    : ''
                })(
                  <Select>
                    <Select.Option value="管理专员">
                      管理专员
                    </Select.Option>
                    <Select.Option value="财物专员">
                      财物专员
                    </Select.Option>
                    <Select.Option value="客服专员">
                      客服专员
                    </Select.Option>
                    <Select.Option value="营销专员">
                      营销专员
                    </Select.Option>
                    <Select.Option value="生产专员">
                      生产专员
                    </Select.Option>
                    <Select.Option value="招聘主管">
                      招聘主管
                    </Select.Option>
                    <Select.Option value="培训总监">
                      培训总监
                    </Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Form.Item
                label="更新时间"
              >
                {getFieldDecorator('managerUpdateTime', {
                  rules: [{
                    required: true,
                    message: '至少选择一个状态!',
                  }],
                  initialValue: props.isEdit
                    ? moment(
                        props.managerUpdateTime,
                      )
                    : moment(
                      new Date()
                        .toLocaleDateString()
                        .replace('/', '-'),
                      'YYYY-MM-DD',
                    ),
                })(
                  <React.Fragment>
                    <DatePicker />
                  </React.Fragment>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="状态"
              >
                {getFieldDecorator('managerState', {
                  rules: [{
                    required: true,
                    message: '至少选择一个!',
                  }],
                  initialValue: props.isEdit
                    ? props.managerState
                    : ''
                })(
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button
                      value="在职"
                    >在职</Radio.Button>
                    <Radio.Button
                      value="离职"
                    >离职</Radio.Button>
                    <Radio.Button
                      value="请假"
                    >请假</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Form.Item label="授权时间">
                {getFieldDecorator('managerAuthorizedTime', {
                  rules: [{
                    required: true,
                    message: '授权时间为必选项!',
                  }],
                  initialValue: props.isEdit
                    ? moment(
                        props.managerAuthorizedTime
                      )
                    : moment(
                      new Date()
                        .toLocaleDateString()
                        .replace('/', '-'),
                      'YYYY-MM-DD',
                    ),
                })(
                  <DatePicker />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="授权人">
                {getFieldDecorator('managerAuthorizedPerson', {
                  rules: [{
                    required: true,
                    message: '此为必填项!',
                  }],
                  initialValue: props.isEdit
                    ? props.managerAuthorizedPerson
                    : '',
                })(
                  <Select>
                    <Select.Option value="朝阳">
                      朝阳
                    </Select.Option>
                    <Select.Option value="ygg">
                      ygg
                    </Select.Option>
                    <Select.Option value="Mr_Duan">
                      Mr_Duan
                    </Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="权限">
                {getFieldDecorator('managerCurrentAuthorized', {
                  rules: [{
                    required: true,
                    message: '必选项',
                  }],
                  initialValue: props.isEdit
                    ? props.managerCurrentAuthorized
                    : '',
                })(
                  <Select>
                    <Select.Option value="初级">
                      初级
                    </Select.Option>
                    <Select.Option value="中等">
                      中等
                    </Select.Option>
                    <Select.Option value="高级">
                      高级
                    </Select.Option>
                    <Select.Option value="超级">
                      超级
                    </Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </PermissionControlWrapper>
  );


};


export default Form.create()(PermissionControlModal);