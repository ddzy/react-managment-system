import * as React from 'react';
import {
  Modal,
} from 'antd';

import {
  PermissionControlWrapper,
} from '../style';


export interface IPermissionAuthorizedModalProps {
  title: string;
  visible: boolean;

  onToggle: (type: 'CREATE') => void;
};


////
//// 编辑&&创建管理者 Modal
////
const PermissionControlModal = (
  props: IPermissionAuthorizedModalProps,
): JSX.Element => {
  

  return (
    <PermissionControlWrapper>
      <Modal
        title={props.title}
        visible={props.visible}
        onCancel={() => props.onToggle('CREATE')}
      >
        管理者授权
      </Modal>
    </PermissionControlWrapper>
  );


};


export default PermissionControlModal;