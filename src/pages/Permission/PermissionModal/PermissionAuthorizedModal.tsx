import * as React from 'react';
import {
  Modal,
} from 'antd';

import {
  PermissionAuthorizedWrapper,
} from '../style';


export interface IPermissionAuthorizedModalProps {

};


////
//// 管理者授权 Modal
////
const PermissionAuthorizedModal = (
  props: IPermissionAuthorizedModalProps,
): JSX.Element => {
  

  return (
    <PermissionAuthorizedWrapper>
      <Modal
        title="管理者授权"
      >
        管理者授权
      </Modal>
    </PermissionAuthorizedWrapper>
  );


};


export default PermissionAuthorizedModal;