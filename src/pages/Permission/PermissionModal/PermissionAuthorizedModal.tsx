import * as React from 'react';
import {
  Modal,
  Form,
  Select,
  message,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';


import {
  PermissionAuthorizedWrapper,
} from '../style';


export interface IPermissionAuthorizedModalProps extends FormComponentProps {
  initialManagerAuthorizedName: string;
  initailManagerCurrentAuthorized: string;
  authorizedModalVisible: boolean;

  onCancel: () => void;
  onSend: (
    values: any,
    callback?: () => void,
  ) => void;
};


////
//// 管理者授权 Modal
////
const PermissionAuthorizedModal = (
  props: IPermissionAuthorizedModalProps,
): JSX.Element => {
  
  const { getFieldDecorator } = props.form;


  const handleSubmit: React.FormEventHandler = (
    e: React.MouseEvent,
  ) => {
    props.form.validateFields((err, values) => {
      if(!err) {
        props.onSend(values, () => {
          message.success('提交成功!');
          props.onCancel();
        });
      }
    }); 
  }


  return (
    <PermissionAuthorizedWrapper>
      <Modal
        destroyOnClose={true}
        title={props.initialManagerAuthorizedName}
        visible={props.authorizedModalVisible}
        onCancel={props.onCancel}
        onOk={handleSubmit}
      >
        <Form layout="vertical">
          <Form.Item label="权限">
            {getFieldDecorator('managerCurrentAuthorized', {
              initialValue: props.initailManagerCurrentAuthorized,
            })(
              <Select style={{ width: '120px' }}>
                <Select.Option value="普通">
                  普通
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
        </Form>
      </Modal>
    </PermissionAuthorizedWrapper>
  );


};


export default Form.create()(PermissionAuthorizedModal);