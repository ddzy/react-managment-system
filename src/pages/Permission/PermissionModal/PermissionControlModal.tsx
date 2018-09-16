import * as React from 'react';
import {
  Modal,
} from 'antd';

import {
  PermissionControlWrapper,
} from '../style';


export interface IPermissionAuthorizedModalProps {
  
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
        title="管理者授权"
      >
        管理者授权
      </Modal>
    </PermissionControlWrapper>
  );


};


export default PermissionControlModal;